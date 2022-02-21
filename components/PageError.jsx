import styled from "styled-components"
import config from "config.json";

const Title = styled.h1``;

const Container = styled.div`
    height: calc(100vh - ${config.style.header.height});
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

const TitleBox = styled.div`
    box-sizing: content-box;
    background-color: ${config.colors.primarycolor};
    padding: 20px;
    border-radius: 10px;
`

export default function PageError({text}) {
    return (
        <Container>
            <TitleBox>
                <Title>{text}</Title>
            </TitleBox>
        </Container>
    )
}