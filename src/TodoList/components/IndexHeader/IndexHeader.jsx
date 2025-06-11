import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { IoSearch } from 'react-icons/io5';
function IndexHeader(props) {
    return (
        <>
        <div css={s.container}> 
            <input css={s.searchInput} type="text" />
            <button css={s.searchButton} ><IoSearch /></button>
        </div>

        <div css={s.fillterContainer}>

            <input type="radio" name="filter" id="all" />
            <label htmlFor="all">전체</label>

            <input type="radio" name="filter" id="complete" />
            <label htmlFor="complete">완료</label>

            <input type="radio" name="filter" id="icomplete" />
            <label htmlFor="icomplete">미완료</label>

        </div>
   </>
    );
}

export default IndexHeader;