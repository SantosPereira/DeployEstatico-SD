import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { placeHolderDados } from "./data";

function App() {
	// const [dados, setDados] = useState(JSON);
	var dados = placeHolderDados
	useEffect(() => {
		axios
			.get(
				"http://api.openweathermap.org/data/2.5/forecast?id=3390760&appid=4167bb5d96d3444a8034e189f5b0d864&units=metric&lang=pt_br"
			)
			.then((resposta) => {
				dados = resposta.data;
			});
	}, []);

	var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	var d = new Date();

	const Card = () => {
		return (
			<div className="card">
				<div>
					<div className="alinharCol tituloCard">
						<h1>{dados.list[0].main.temp.toFixed(0)}°</h1>
						<p>{dados.list[0].weather[0].description}</p>
					</div>
					<div className="rodape">
						<div>
							<p>{semana[d.getDay()+1]}</p>
							<div>
								<p>{dados.list[1].main.temp.toFixed(0)}°</p>
								<p>{dados.list[1].weather[0].description}</p>
							</div>
						</div>
						<div id="segundaData">
							<p>{semana[d.getDay()+2]}</p>
							<div>
								<p>{dados.list[2].main.temp.toFixed(0)}°</p>
								<p>{dados.list[2].weather[0].description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="App">
			<Card></Card>
			{/* <Card></Card>
      <Card></Card> */}
		</div>
	);
}

export default App;
