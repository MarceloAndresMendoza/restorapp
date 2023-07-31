import { Route, Routes } from 'react-router-dom';
import { Index, NotFound } from '../websiteComponents';
import { useState } from 'react';

export const AppRouter = () => {

    const [currentTheme, setCurentTheme] = useState('defaultTheme');

    return (
        <>
            <div className={currentTheme}>
                <Routes>
                    <Route path='/' element={<Index />} />
                    {/* <Route path = 'contacto' element = { <Contacto /> } />
                    <Route path='tienda'>
                        <Route index element = { <Tienda /> } />
                        <Route path = ':productID' element = { <Product /> } />
                    </Route> */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};