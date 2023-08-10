import { useEffect, useState } from "react";
import { getCurrentDateString, getDayOfWeekString, getMonthName } from "../utils/date-utils";
import { getExampledata, getFirebaseExampledata } from "../utils/exampleData";
import i18next from "i18next";
import Modal from 'react-modal';

import { collection, getDocs, addDoc, setDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const ReservationList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [currentID, setCurrentID] = useState(null);
    const [currentItemIndex, setCurrentItemIndex] = useState(null);

    const [selectedBooking, setSelectedBooking] = useState(null);

    const [availablesector1, setAvailableSector1] = useState(4);
    const [availablesector2, setAvailableSector2] = useState(4);
    const [availablesector3, setAvailableSector3] = useState(4);

    const [reservationData, setReservationData] = useState([]);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        guests: 1,
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        guests: "",
    });

    const handleSetCurrentID = (id, itemindex) => {
        id !== currentID && setCurrentID(id);
        itemindex !== currentItemIndex && setCurrentItemIndex(itemindex);
        id !== currentID && console.log('Selected ID:', currentID)
    }

    const handleOnBookHereClick = (key, period) => {
        return () => {
            const availableKey = eval(`available${key}`);
            const morningLength = reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.morning.length || 0;
            const afternoonLength = reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.afternoon.length || 0;
            const availableCount = +(availableKey) - (period === 'morning' ? morningLength : afternoonLength);

            const message = `Key: ${key}, Period: ${period}, Available Count: ${availableCount}`;
            console.log(message);
            setSelectedBooking({ key, period });

            // TODO Save Code Here
            setIsModalOpen(true);
        };
    };

    const userCollectionRef = collection(db, 'reservations');
    const updateDataFromAPI = async () => {
        const data = await getDocs(userCollectionRef);
        setReservationData(
            data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
    }

    const sendDataToAPI = async () => {
        await addDoc(userCollectionRef, { reservationData });
        console.log('Data sent')
    }

    const updateDataOnAPI = async (currentItemIndex) => {
        ///console.log(currentID)
        await updateDoc(doc(db, "reservations", doc.currentID), {
            reservationData
        });
    }

    const sendInitialData = async () => {
        await addDoc(userCollectionRef, getFirebaseExampledata())
    }

    useEffect(() => {
        updateDataFromAPI();
        // sendInitialData()
    }, [])

    useEffect(() => {
        console.log(reservationData);
    }, [reservationData])

    const handleDateChange = (amount) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + amount);
        setCurrentDate(newDate);
    };

    const handleBookNow = async () => {
        const errors = {};
        if (!formData.fullName) {
            errors.fullName = i18next.t('reservation-full-name-required');
        }
        if (!formData.email) {
            errors.email = i18next.t('reservation-email-required');
        }
        if (!formData.phone) {
            errors.phone = i18next.t('reservation-phone-required');
        }
        if (!formData.guests) {
            errors.guests = i18next.t('reservation-guests-required');
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return;
        }
        console.log("Form data:", formData);


        try {
            const updatedData = [...reservationData];
            const bookingToUpdate = updatedData.find(item => item.date === getCurrentDateString(currentDate));
            if (bookingToUpdate) {
                const { key, period } = selectedBooking;
                const periodArray = bookingToUpdate[key][period];
                periodArray.push({
                    guests: formData.guests,
                    fullname: formData.fullName,
                    phone: formData.phone,
                    email: formData.email
                });

                // setReservationData(updatedData);
                updateDataOnAPI();
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error('Failed to update reservation data:', error);

        };
    }

    let noMatching = true
    return (
        <div className="flex flex-col justify-center w-full items-center">
            <div className="my-4 text-xl">
                <div className="flex flex-row gap-4 items-center">
                    <i className="fas fa-calendar-alt text-purple-500"></i> {i18next.t('reservation-date-current')}
                    <div className="ml-2 flex flex-row gap-8 items-center">
                        <button
                            className="text-purple-500 hover:text-purple-700 focus:outline-none p-4 shadow-md sm:shadow-none rounded-md"
                            onClick={() => handleDateChange(-1)}
                        >
                            <i className="fas fa-chevron-left"><noscript>&#9664;</noscript></i>
                        </button>
                        <div className="font-bold">{currentDate.toLocaleDateString()}</div>
                        <button
                            className="text-purple-500 hover:text-purple-700 focus:outline-none p-4 shadow-md sm:shadow-none rounded-md"
                            onClick={() => handleDateChange(1)}
                        >
                            <i className="fas fa-chevron-right"><noscript>&#9654;</noscript></i>
                        </button>
                    </div>
                </div>
            </div>
            <table className="table-auto border-collapse w-full max-w-[1000px] text-xl">
                <thead className="bg-orange-700 text-white">
                    <tr>
                        <th className="p-4">{i18next.t('reservation-sector')}</th>
                        <th className="p-4">{i18next.t('reservation-time')}</th>
                        <th className="p-4">{i18next.t('reservation-available')}</th>
                    </tr>
                </thead>
                {reservationData.map((item, itemindex) => {
                    if (item.date === getCurrentDateString(currentDate)) {
                        handleSetCurrentID(item.id, itemindex);
                        noMatching = false;
                        return (
                            <tbody className="bg-orange-100" key={itemindex}>
                                {Object.keys(item).map((key, index) => {
                                    if (key !== 'date' && key !== 'id') {
                                        return (
                                            <>
                                                <tr className="border-t-2 border-orange-200" key={index}>
                                                    <td className="px-4 font-bold" rowSpan={2}>
                                                        {i18next.t(`reservation-${key}`)}
                                                    </td>
                                                    <td className="p-4">
                                                        <i className="fas fa-sun text-yellow-400"></i> {i18next.t('reservation-morning')}
                                                    </td>
                                                    <td className="p-4 text-center font-bold flex flex-row items-center gap-4 justify-between">
                                                        {
                                                            +(eval(`available${key}`)) - reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.morning.length
                                                            // console.log(eval(`available${key}`))
                                                        }
                                                        {+(eval(`available${key}`)) - (reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.morning.length || 0) !== 0 ? (
                                                            <button onClick={handleOnBookHereClick(key, 'morning')} className="rounded-full bg-orange-600 text-orange-100 px-4 py-1 shadow-md hover:shadow-xl hover:text-white hover:bg-orange-700">{i18next.t('reservation-book-now')}</button>
                                                        ) : (
                                                            <button className="rounded-full bg-orange-200 text-orange-400 px-4 py-1" disabled>{i18next.t('reservation-book-not-available')}</button>
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4">
                                                        <i className="fas fa-cloud-sun text-yellow-800"></i> {i18next.t('reservation-afternoon')}
                                                    </td>
                                                    <td className="p-4 text-center font-bold flex flex-row items-center gap-4 justify-between">
                                                        {
                                                            +(eval(`available${key}`)) - reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.afternoon.length
                                                        }
                                                        {+(eval(`available${key}`)) - (reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.afternoon.length || 0) !== 0 ? (
                                                            <button onClick={handleOnBookHereClick(key, 'afternoon')} className="rounded-full bg-orange-600 text-orange-100 px-4 py-1 shadow-md hover:shadow-xl hover:text-white hover:bg-orange-700">{i18next.t('reservation-book-now')}</button>
                                                        ) : (
                                                            <button className="rounded-full bg-orange-200 text-orange-400 px-4 py-1" disabled>{i18next.t('reservation-book-not-available')}</button>
                                                        )}
                                                    </td>
                                                </tr>
                                            </>

                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        );
                    }
                    return null;
                })
                }
                {
                    noMatching && (
                        <>
                            <tbody className="bg-orange-100">
                                <tr className="border-t-2 border-orange-200" >
                                    <td className="px-4 font-bold text-center text-xl p-8 text-orange-500 h-[363px]" colSpan={3}>
                                        {i18next.t(`reservation-not-available`)}
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    )
                }
            </table >
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Reservation Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="w-full h-full bg-[#aaaaaaaa] backdrop-blur-sm fixed top-0 left-0 ">
                    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-sm">
                        <div className="bg-white rounded-lg shadow-lg min-w-[600px]">
                            <div className="bg-orange-600 text-white px-8 py-4 rounded-t-lg">
                                <h2 className="text-xl font-semibold">{i18next.t('reservation-modal-title')}</h2>
                            </div>
                            <div className="my-4 mx-8">
                                <div className="my-4">
                                    {i18next.t('reservation-booking-for-the-day')} {' '}
                                    <span className="font-bold">{getDayOfWeekString(currentDate.getDay())}</span>,{' '}
                                    <span className="font-bold">{currentDate.getDate()}</span> {i18next.t('of')}{' '}
                                    <span className="font-bold">{getMonthName(currentDate.getMonth())}</span>
                                </div>
                                <div className="my-4">
                                    {i18next.t('reservation-booking-location')} {' '}
                                    <span className="font-bold">{selectedBooking && i18next.t(`reservation-${selectedBooking.key}`)}</span>, {' '}{i18next.t('reservation-booking-time')}
                                    <span className="font-bold"> {selectedBooking && i18next.t(`reservation-${selectedBooking.period}`)}</span>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">{i18next.t('reservation-full-name')}</label>
                                    <input
                                        type="text"
                                        className={`mt-1 p-2 border ${formErrors.fullName ? "border-red-500" : "border-orange-600"
                                            } rounded w-full focus:outline-none focus:border-orange-600 focus:shadow-lg`}
                                        placeholder={i18next.t('reservation-enter-full-name')}
                                        value={formData.fullName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, fullName: e.target.value });
                                            setFormErrors({ ...formErrors, fullName: "" });
                                        }}
                                    />
                                    {formErrors.fullName && <p className="text-red-500">{formErrors.fullName}</p>}
                                </div>


                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">{i18next.t('reservation-email')}</label>
                                    <input
                                        type="email"
                                        className={`mt-1 p-2 border ${formErrors.email ? "border-red-500" : "border-orange-600"
                                            } rounded w-full focus:outline-none focus:border-orange-600 focus:shadow-lg`}
                                        placeholder={i18next.t('reservation-enter-email')}
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            setFormErrors({ ...formErrors, email: "" });
                                        }}
                                    />
                                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                                </div>



                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">{i18next.t('reservation-phone')}</label>
                                    <input
                                        type="tel"
                                        className={`mt-1 p-2 border ${formErrors.phone ? "border-red-500" : "border-orange-600"
                                            } rounded w-full focus:outline-none focus:border-orange-600 focus:shadow-lg`}
                                        placeholder={i18next.t('reservation-enter-phone')}
                                        value={formData.phone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, phone: e.target.value });
                                            setFormErrors({ ...formErrors, phone: "" });
                                        }}
                                    />
                                    {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                                </div>



                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">{i18next.t('reservation-guests')}</label>
                                    <input
                                        type="number"
                                        className={`mt-1 p-2 border ${formErrors.guests ? "border-red-500" : "border-orange-600"
                                            } rounded w-full focus:outline-none focus:border-orange-600 focus:shadow-lg`}
                                        placeholder={i18next.t('reservation-enter-guests')}
                                        value={formData.guests}
                                        onChange={(e) => {
                                            setFormData({ ...formData, guests: e.target.value });
                                            setFormErrors({ ...formErrors, guests: "" });
                                        }}
                                        min={1}
                                        max={8}
                                    />
                                    {formErrors.guests && <p className="text-red-500">{formErrors.guests}</p>}
                                </div>




                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={handleBookNow}
                                        className="rounded-md bg-orange-600 text-white px-4 py-1 hover:bg-green-700"
                                    >
                                        {i18next.t('reservation-submit')}
                                    </button>
                                    <button
                                        className="ml-4 rounded-md bg-white border border-orange-600 text-orange-600 px-4 py-1 hover:bg-red-600 hover:text-white hover:border-transparent"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        {i18next.t('reservation-close')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
