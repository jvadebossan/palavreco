import styled from "styled-components"
import config from "config.json"

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
`;

const ListItem = styled.li`
    color: ${props => props.color};
`;

const Difficulty = () => {
    return (
        <List>
            <ListItem color={`${config.colors.correct}`}>FÁCIL</ListItem>
            <ListItem color={`${config.colors.almost}`}>MÉDIO</ListItem>
            <ListItem color={`${config.colors.wrong}`}>DIFÍCIL</ListItem>
        </List>
    )
}

export default Difficulty