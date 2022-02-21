import styled from 'styled-components';
import cfg from 'config.json';

import Header from './Header';

const Layout = ({children}) => {
    return(
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout