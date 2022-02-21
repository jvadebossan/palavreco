import styled from 'styled-components';
import config from 'config.json'

import Logo from "@/components/Logo"

import { IoPersonCircleOutline } from "react-icons/io5";

const HeaderBg = styled.div`
    width: 100vw;
    height: ${config.style.header.height};
    background-color: ${config.colors.primarycolor};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${config.colors.text};

    @media (max-width: 700px){
        justify-content:space-between;
        padding: ${config.style.page.padding}
    }

`;

const Icons = styled.div`
    display: flex;
    position: absolute;
    right: ${config.style.page.padding};

    @media (max-width: 700px){
        position:relative;
        right:unset;
    }
`

const StyledIcon = styled.button`
    margin-right: 20px;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    color: inherit;
    cursor:pointer;

    & > svg{
        height: 100%;
    }

    &:last-child{
        margin-right: 0px;
    }
`

const Icon = ({src:CustomIcon, ...props})=>{
    return (
        <StyledIcon>
            <CustomIcon/>
        </StyledIcon>
    )
}

const Header = () => {
    return(
        <HeaderBg>
            <Logo/>
            <Icons>
                <Icon src={IoPersonCircleOutline}/>
            </Icons>
        </HeaderBg>
    )
}

export default Header