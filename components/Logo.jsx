import Image from "next/image";
import styled from "styled-components";
import logoSrc from 'public/src/assets/palavreco.svg';

const StyledImage = styled(Image)`
    max-width: ${({width}) => width}px;
`

export default ()=>{
    return (
        <StyledImage
            src={logoSrc}
            width={300}
        />
    )
}