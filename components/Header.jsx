import styled from 'styled-components';
import cfg from 'config.json'

const HeaderBg = styled.div`
    width: 100vw;
    height: 60px;
    background-color: ${cfg.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    color: ${cfg.colors.text};
    font-family: 'Rampart One', cursive;
    user-select: none;
`;

const Header = () => {
    return( 
        <HeaderBg>
            <Logo>PALAVRECO</Logo>
        </HeaderBg>
    )
}

export default Header