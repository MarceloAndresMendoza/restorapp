import i18next from "i18next";
import { useEffect, useState } from "react";
import { getExampledata } from "../utils/exampleData";
import { getDataAPI } from "../utils/API";

export const ReservationList = () => {

    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const [availablesector1, setAvailableSector1] = useState(4);
    const [availablesector2, setAvailableSector2] = useState(4);
    const [availablesector3, setAvailableSector3] = useState(4);

    const handleDateChange = (amount) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + amount);
        setCurrentDate(newDate);
    };

    const getCurrentDateString = () => {
        const stringifiedDate = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
        return stringifiedDate;
    }

    useEffect(() => {
        console.log(getDataAPI('8-8-2023'))
    }, [])

    const [reservationData, setReservationData] = useState(getExampledata());
    let noMatching = true
    return (
        <>
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
            <table className="table-auto border-collapse w-full text-xl">
                <thead className="bg-orange-700 text-white">
                    <tr>
                        <th className="p-4">{i18next.t('reservation-sector')}</th>
                        <th className="p-4">{i18next.t('reservation-time')}</th>
                        <th className="p-4">{i18next.t('reservation-available')}</th>
                    </tr>
                </thead>
                <tbody className="bg-orange-100">
                    {reservationData.map(item => {
                        if (item.id === getCurrentDateString()) {
                            noMatching = false;
                            return (
                                <>
                                    {Object.keys(item).map(key => {
                                        if (key !== 'id') {
                                            return (
                                                <>
                                                    <tr className="border-t-2 border-orange-200" key={key}>
                                                        <td className="px-4 font-bold" rowSpan={2}>
                                                            {i18next.t(`reservation-${key}`)}
                                                        </td>
                                                        <td className="p-4">
                                                            <i className="fas fa-sun text-yellow-400"></i> {i18next.t('reservation-morning')}
                                                        </td>
                                                        <td className="p-4 text-center font-bold">
                                                            {
                                                                +(eval(`available${key}`)) - reservationData.find(item => item.id === getCurrentDateString())?.[key]?.morning.length
                                                                // console.log(eval(`available${key}`))
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4">
                                                            <i className="fas fa-cloud-sun text-yellow-800"></i> {i18next.t('reservation-afternoon')}
                                                        </td>
                                                        <td className="p-4 text-center font-bold">
                                                            {
                                                                +(eval(`available${key}`)) - reservationData.find(item => item.id === getCurrentDateString())?.[key]?.afternoon.length
                                                            }
                                                        </td>
                                                    </tr>
                                                </>

                                            );
                                        }
                                        return null;
                                    })}
                                </>
                            );
                        }
                        return null;
                    })}
                    {
                        noMatching && (
                            <>
                                <tr className="border-t-2 border-orange-200" >
                                    <td className="px-4 font-bold text-center text-xl p-8 text-orange-500 h-[363px]" colSpan={3}>
                                        {i18next.t(`reservation-not-available`)}
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
