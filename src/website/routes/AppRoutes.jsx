import { Route, Routes } from 'react-router-dom';
import { Index, Menu, NotFound, Reservations, Myreservation, Admin } from '../websiteComponents';
import { useState } from 'react';

export const AppRouter = () => {

    const [currentTheme, setCurentTheme] = useState('defaultTheme');

    return (
        <>
            <div className={currentTheme}>
                <Routes>
                    <Route path='/restorapp' element={<Index />} />
                    <Route path = '/restorapp/menu' element = { <Menu /> } />
                    <Route path = '/restorapp/admin' element = { <Admin /> } />
                    <Route path='/restorapp/reservations'>
                        <Route index element = { <Reservations /> } />
                        <Route path = ':reservationID' element = { <Myreservation /> } />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};