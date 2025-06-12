
/** @jsxImportSource @emotion/react */

import IndexHeader from '../IndexHeader/IndexHeader';
import * as s from './styles';
function IndexLayout({children, filter, setFilter, setSearchText}) {
    return (
        <div css={s.layout}>
            <IndexHeader filter={filter} setFilter={setFilter} setSearchText={setSearchText}/>
            {children}
        </div>
    );
}
// rsf
export default IndexLayout;