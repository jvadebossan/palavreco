import styled from "styled-components"
import config from 'config.json'

import Difficulty from "@/components/Difficulty";

import {useState} from "react";

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
	min-width: 300px; 
	min-height: 50%;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 684px){
		height: 80%;
		width: 80%;
	}
`;

const Title = styled.h1`
	position: absolute;
	font-size: 2.5rem;
	top: 30px;
	
	@media (max-width: 600px) {
		font-size: 2rem;
	}
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
	background-color: ${({color})=>color};
	font-size: 2rem;
	font-weight: bold;
	
	@media (max-width: 600px) {
		font-size: 1.5em;
	}
`;

const DifficultyContainer = styled.div``;

const Home = () => {

	const [buttonPlay, setButtonPlay] = useState({
		color: config.colors.correct,
		difficulty: "easy"
	});

	const handleDifficultyClick = (event)=>{
		const {color, difficulty} = event.target.dataset;

		if(!color || !difficulty){
			return console.error(`DifficultyItem doesn't have prop "color" or "difficulty"`);
		}

		if(color == buttonPlay.color || difficulty == buttonPlay.difficulty){
			return console.log("Same color or difficulty");
		}

		setButtonPlay({
			color,
			difficulty
		})
	}

	return (
    	<Container>
			<Painel>	
				<Title>DIFICULDADE</Title>   
				<DifficultyContainer>
					<Difficulty onClick = {handleDifficultyClick}/>
				</DifficultyContainer>
				<BotaoJogar color = {buttonPlay.color}>JOGAR</BotaoJogar>
			</Painel>
		</Container>
  	)
}

export default Home