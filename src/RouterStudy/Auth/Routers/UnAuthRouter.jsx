import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Siginup from '../Siginup/Siginup';
import Signin from '../Signin/Signin';
import NotFound from '../NotFound/NotFund';

function UnAuthRouter() {
    return (
        
            <Routes>
                <Route path='/signin' element={<Signin />}/>
                <Route path='/signup' element={<Siginup />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        
    );
}


export default UnAuthRouter;