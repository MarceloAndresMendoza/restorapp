import i18next from "i18next";
import { Header } from "../components/Header"
import { ReservationList } from "../components/ReservationDetails";

export const Admin = () => {
    return (
        <>
            <Header small='true' />
            <div className="container mx-auto p-4">
                <div className="flex flex-col sm:flex-row w-full justify-between items-end sm:items-start sm:gap-10">
                    <h1 className="text-6xl font-semibold mb-4 text-accent whitespace-nowrap">{i18next.t("admin-title")}</h1>
                    <p className="text-sm text-gray-400 mb-8 max-w-[500px] text-right">{i18next.t("admin-text")}</p>
                </div>
                <div>
                    <ReservationList />
                </div>
            </div>
        </>
    )
}
