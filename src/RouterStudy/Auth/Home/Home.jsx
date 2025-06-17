import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { Link } from 'react-router-dom';
import { LuLogOut, LuUser, LuUserPlus } from 'react-icons/lu';

function Home(props) {
    const [ isLogin, setLogin ] = useState(true);

    return (
        <div css={s.layout}>
     
            <main>

            </main>
        </div>
    );
}

export default Home;