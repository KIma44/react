import React, { useEffect, useState } from 'react';
import RootLayout from '../RootLagyout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import UnAuthRouter from './UnAuthRouter';
import AuthRouter from './AuthRouter';
import NotFound from '../NotFound/NotFund';
import RootHeader from '../RootHeader/RootHeader';
import axios from 'axios';
import { useGlobalStateStore, useRefreshStore } from '../stores/storeStudy';
import { useQuery } from '@tanstack/react-query';

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역 상태(Zustand, recoil-react19에서 지원 x)
 * 2. 서버 전역 상태(ReacQuery)
 */

function MainRouterReactQuery(props) {

    const principalUserQuery = useQuery({
        queryKey: ["principalUserQuery"],
        queryFn: async () => {
            const accessToken = localStorage.getItem("AccessToken");

            return await axios.get("http://localhost:8080/api/users/principal", {
                headers: {
                    Authorization: !accessToken ? null : `Bearer ${accessToken}`,
                },
            });
        },
    });

    console.log(principalUserQuery.isLoading);
    console.log(principalUserQuery.data);
    

    return (
        <>
            {
                !principalUserQuery.isLoading && 
            <RootLayout>
                <RootHeader />
                <Routes>
                    <Route path='' element={<Home />}/>
                    <Route path='/auth/*' element={<AuthRouter />} />
                    <Route path='/users/*' element={<UnAuthRouter />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </RootLayout>
            }
        </>
    );
}

export default MainRouterReactQuery;