import { Route, Routes } from 'react-router-dom';
import { Index, Menu, NotFound, Reservations, Myreservation, Admin } from '../websiteComponents';
import { useState } from 'react';

export const AppRouter = () => {

    const [currentTheme, setCurentTheme] = useState('defaultTheme');

    return (
        <>
            <div className={currentTheme}>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path = 'menu' element = { <Menu /> } />
                    <Route path = 'admin' element = { <Admin /> } />
                    <Route path='reservations'>
                        <Route index element = { <Reservations /> } />
                        <Route path = ':reservationID' element = { <Myreservation /> } />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};