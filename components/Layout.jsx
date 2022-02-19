import styled from 'styled-components';
import cfg from 'config.json';

import Header from './Header';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${cfg.colors.background};
`;

const Layout = ({children}) => {
    return(
        <Container>
            <Header/>
            {children}
        </Container>
    )
}

export default Layout