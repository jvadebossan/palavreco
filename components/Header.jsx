import styled from 'styled-components';
import config from 'config.json'

import SVG from 'public/src/assets/palavreco.svg'
import Image from 'next/image'

import { IoPersonCircleOutline } from "react-icons/io5";

const HeaderBg = styled.div`
    width: 100vw;
    height: ${config.style.header.height};
    background-color: ${config.colors.primarycolor};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${config.colors.text}
`;

const Icons = styled.div`
    display: flex;
    position: absolute;
    left: ${config.style.page.padding}
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
            <Icons>
                <Icon src={IoPersonCircleOutline}/>
            </Icons>
                
            <Image src={SVG} width={300}/>
        </HeaderBg>
    )
}

export default Header