import { useEffect, useState } from "react";
import { getCurrentDateString, getDayOfWeekString, getMonthName, emptyDayData } from "../utils/date-utils";
import { getExampledata, getFirebaseExampledata } from "../utils/exampleData";
import i18next from "i18next";
import Modal from 'react-modal';
import swal from 'sweetalert';

import { collection, getDocs, addDoc, setDoc, updateDoc, doc, query, orderBy, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const ReservationList = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [currentID, setCurrentID] = useState(null);
    const [reservationData, setReservationData] = useState([]);
    const [currentItemIndex, setCurrentItemIndex] = useState(null);
    const [dataArrived, setDataArrived] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [availablesector1, setAvailableSector1] = useState(4);
    const [availablesector2, setAvailableSector2] = useState(4);
    const [availablesector3, setAvailableSector3] = useState(4);

    const handleSetCurrentID = (id, itemindex) => {
        id !== currentID && setCurrentID(id);
        itemindex !== currentItemIndex && setCurrentItemIndex(itemindex);
        id !== currentID && console.log('Selected ID:', currentID)
    }

    const handleDeleteButtonClick = (key, period, personIndex) => {
        return () => {
            swal({ title: i18next.t('admin-warning'), text: i18next.t('admin-confirm-delete'), dangerMode: true , icon: 'warning'})
                .then((value) => {
                    if (value) {
                        console.log('deleted')
                        handleDeleteReservation(key, period, personIndex)
                    }
                })
        }
    }

    const handleDeleteReservation = async (key, period, personIndex) => {
        try {
            const updatedData = [...reservationData];
            const personList = updatedData[currentItemIndex]?.[key]?.[period];
            setSelectedBooking({ key, period });

            if (personList) {
                // Remove the person from the array
                personList.splice(personIndex, 1);

                // Update the reservation data in the state and on the API
                await updateDataOnAPI(updatedData[currentItemIndex]);
                swal({text: i18next.t('admin-deleted'), icon:'success'})
                setReservationData(updatedData);
            }
        } catch (error) {
            // console.log(selectedBooking.key, period);
            console.error('Error deleting reservation:', error);
        }
    };

    const updateDataOnAPI = async (updatedData) => {
        try {
            const reservationDocRef = doc(db, 'reservations', currentID);

            // Update the entire document with the modified data
            await setDoc(reservationDocRef, updatedData);

            console.log('Document successfully updated');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const userCollectionRef = collection(db, 'reservations');

    const updateDataFromAPI = async () => {
        const querySnapshot = await getDocs(query(userCollectionRef, orderBy('date')));
        setReservationData(
            querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
        setDataArrived(true);
    };

    const handleEnableThisDay = async () => {
        try {
            const reservationDocRef = collection(db, 'reservations');
            const emptyData = emptyDayData(getCurrentDateString(currentDate));
            console.log(emptyData);

            await addDoc(reservationDocRef, emptyData);
            swal(i18next.t('admin-day-enabled-title'), i18next.t('admin-day-enabled-text'), 'success');
            updateDataFromAPI();
            console.log('Document successfully created');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    const sendInitialData = async () => {
        await addDoc(userCollectionRef, getFirebaseExampledata())
    }

    useEffect(() => {
        // sendInitialData()
        updateDataFromAPI();
    }, [])

    useEffect(() => {
        console.log(reservationData);
    }, [reservationData])

    const handleDateChange = (amount) => {
        updateDataFromAPI();
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + amount);
        setCurrentDate(newDate);
    };

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
                        <div className="font-bold">{getDayOfWeekString(currentDate.getDay())}{' '}<span className="text-purple-500">{currentDate.toLocaleDateString()}</span></div>
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
                        <th className="p-4">{i18next.t('reservation-done')}</th>
                    </tr>
                </thead>
                {reservationData.map((item, itemindex) => {
                    // First, we map the dates one by one
                    if (item.date === getCurrentDateString(currentDate)) {
                        // Memorize the current id so we can edit then after
                        handleSetCurrentID(item.id, itemindex);
                        noMatching = false;

                        // Extract the keys and sort them since firestore gave me the array in whatever order it wants...
                        const sortedKeys = Object.keys(item).filter(key => key !== 'date' && key !== 'id').sort();
                        return (
                            <tbody className="bg-orange-100" key={itemindex}>
                                {sortedKeys.map((key, index) => {
                                    // Discard the general keys 'date' and 'id'
                                    if (key !== 'date' && key !== 'id') {
                                        // Now, each key is an 'sector1', 'sector2' and 'sector3'
                                        return (
                                            <>
                                                <tr className="border-t-2 border-orange-200" key={index}>
                                                    <td className="px-4 font-bold -rotate-90 sm:rotate-0 w-3 sm:w-20" rowSpan={2}>
                                                        {i18next.t(`reservation-${key}`)}
                                                    </td>
                                                    <td className="p-4">
                                                        <i className="fas fa-sun text-yellow-400"></i> {i18next.t('reservation-morning-short')}
                                                    </td>
                                                    <td className="p-4 text-center font-normal text-sm flex flex-col sm:flex-row items-center gap-4">
                                                        <div>
                                                            {
                                                                reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.morning.length
                                                            }/{eval(`available${key}`)}
                                                        </div>

                                                        <div className="w-full ml-4">
                                                            {Object.keys(item[key]?.morning || {}).sort().map(personKey => (
                                                                <div className="text-left py-2 border-yellow-600 border-t pl-2 border-l mb-2 flex gap-2 flex-wrap sm:flex-nowrap max-w-96 flex-col sm:flex-row justify-between hover:translate-x-1 hover:shadow-lg transition" key={personKey}>
                                                                    <div className="flex flex-wrap flex-col sm:flex-row gap-4">
                                                                        <div className="flex flex-row gap-4 justify-between">
                                                                            <p className="text-sm font-bold text-orange-600" >{item[key]?.morning?.[personKey]?.fullname}</p>
                                                                            <p className="text-sm font-normal px-2 py-1 bg-orange-600 text-white rounded-full flex gap-3 items-center" >{item[key]?.morning?.[personKey]?.guests} <i className="fa-solid fa-user-group text-orange-200"></i></p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-4 sm:flex-row">
                                                                            <a className="text-sm font-normal hover:text-orange-400 flex gap-1 flex-nowrap" target="_blank" href={'mailto:' + item[key]?.morning?.[personKey]?.email}><i className="fa-solid fa-envelope text-orange-600"></i> {item[key]?.morning?.[personKey]?.email}</a>
                                                                            <a className="text-sm font-normal text-orange-800 hover:text-orange-400 flex gap-1 flex-nowrap" href={'tel:' + item[key]?.morning?.[personKey]?.phone}><i className="fa-solid fa-mobile text-orange-600"></i> {item[key]?.morning?.[personKey]?.phone}</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <button onClick={handleDeleteButtonClick(key, 'morning', personKey)}><i className="text-xl text-red-300 hover:text-red-500 fa-solid fa-calendar-xmark px-1"></i></button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-orange-200 border-t">
                                                    <td className="p-4">
                                                        <i className="fas fa-cloud-sun text-yellow-800"></i> {i18next.t('reservation-afternoon-short')}
                                                    </td>
                                                    <td className="p-4 text-center font-normal text-sm flex flex-col sm:flex-row items-center gap-4">
                                                        <div className="">
                                                            {
                                                                reservationData.find(item => item.date === getCurrentDateString(currentDate))?.[key]?.afternoon.length
                                                                // console.log(eval(`available${key}`))
                                                            }/{eval(`available${key}`)}
                                                        </div>
                                                        <div className="w-full ml-4">
                                                            {Object.keys(item[key]?.afternoon || {}).sort().map(personKey => (
                                                                <div className="text-left py-2 border-yellow-600 border-t pl-2 border-l mb-2 flex gap-2 flex-wrap sm:flex-nowrap max-w-96 flex-col sm:flex-row justify-between hover:translate-x-1 hover:shadow-lg transition" key={personKey}>
                                                                    <div className="flex flex-wrap flex-col sm:flex-row gap-4">
                                                                        <div className="flex flex-row gap-4 justify-between">
                                                                            <p className="text-sm font-bold text-yellow-600" >{item[key]?.afternoon?.[personKey]?.fullname}</p>
                                                                            <p className="text-sm font-normal px-2 py-1 bg-yellow-600 text-white rounded-full flex gap-3 items-center" >{item[key]?.afternoon?.[personKey]?.guests} <i className="fa-solid fa-user-group text-orange-200"></i></p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-4 sm:flex-row">
                                                                            <a className="text-sm font-normal hover:text-yellow-600 flex gap-1 flex-nowrap" target="_blank" href={'mailto:' + item[key]?.afternoon?.[personKey]?.email}><i className="fa-solid fa-envelope text-yellow-600"></i> {item[key]?.afternoon?.[personKey]?.email}</a>
                                                                            <a className="text-sm font-normal text-orange-800 hover:text-yellow-600 flex gap-1 flex-nowrap" href={'tel:' + item[key]?.afternoon?.[personKey]?.phone}><i className="fa-solid fa-mobile text-yellow-600"></i> {item[key]?.afternoon?.[personKey]?.phone}</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <button onClick={handleDeleteButtonClick(key, 'afternoon', personKey)}><i className="text-xl text-red-300 hover:text-red-500 fa-solid fa-calendar-xmark px-1"></i></button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
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
                    noMatching && (() => {
                        if (dataArrived) {
                            return (
                                <tbody className="bg-orange-100">
                                    <tr className="border-t-2 border-orange-200">
                                        <td className="px-4 font-bold text-center text-xl p-8 text-orange-500 " colSpan={3}>
                                            {i18next.t(`reservation-not-available-admin`)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center p-6 h-[363px]" colSpan={3}>
                                            <button onClick={handleEnableThisDay} className="bg-orange-500 px-4 py-2 rounded-full text-white font-bold hover:shadow-lg hover:bg-orange-600">Habilitar este día</button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        } else {
                            return (
                                <tbody className="bg-orange-100">
                                    <tr className="border-t-2 border-orange-200">
                                        <td className="px-4 font-bold text-center text-xl p-8 text-orange-500 h-[363px]" colSpan={3}>
                                            {i18next.t(`reservation-loading`)}
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        }
                    })()
                }

            </table >
        </div>
    )
}
