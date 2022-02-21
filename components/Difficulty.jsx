import styled from "styled-components"
import config from "config.json"

const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 2rem;
    flex-wrap:wrap;
    
    @media (max-width: 684px) {
		font-size: 3rem;
        flex-direction: column;
        
        & > li{
            margin: 0 0 10px 0;
        }
	}
`;

const ListItem = styled.li`
    color: ${props => props["data-color"]};
    cursor: pointer;
    margin-right: 20px;

    &:last-child{
        margin-right:0;
    }
`;

const Difficulty = ({onClick}) => {

    return (
        <List>
            <ListItem onClick = {onClick} data-color={`${config.colors.correct}`} data-difficulty = "easy">FÁCIL</ListItem>
            <ListItem onClick = {onClick} data-color={`${config.colors.almost}`}  data-difficulty = "medium">MÉDIO</ListItem>
            <ListItem onClick = {onClick} data-color={`${config.colors.wrong}`}  data-difficulty = "hard">DIFÍCIL</ListItem>
        </List>
    )
}

export default Difficulty