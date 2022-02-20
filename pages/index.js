import styled from "styled-components"
import config from 'config.json'
import Difficulty from "@/components/Difficulty";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: calc(100vh - ${config.style.header.height});
	font-family: 'Red Hat Display', sans-serif;
`;

const Painel = styled.div`
	background-color: ${config.colors.primarycolor};
	width: 50%;
	height: 50%;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	position: absolute;
	font-size: 2.5rem;
	top: 30px;
`;

const BotaoJogar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 60px;
	bottom: 0;
	border-radius: 0px 0px 20px 20px;
	background-color: ${config.colors.correct};
	font-size: 2rem;
	font-weight: bold;
`;

const DifficultyContainer = styled.div``;

const Home = () => {
	return (
    	<Container>
			<Painel>	
				<Title>DIFICULDADE</Title>   
				<DifficultyContainer>
					<Difficulty/>
				</DifficultyContainer>
				<BotaoJogar>JOGAR</BotaoJogar>
			</Painel>
		</Container>
  	)
}

export default Home