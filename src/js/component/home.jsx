import React from "react";
import Game from "./game.jsx";




//create your first component
const Home = () => {
	return (<>
	<div id="game">
		<h1>Tic-Tac-Toe in React.js</h1>
		<Game/>
		</div>
		</>);
};

export default Home;
