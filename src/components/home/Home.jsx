import './style/HomeStyle.css'
import Escala from "../escala/Escala";
import { escalaMixagem } from '../../escalas';
// import { escalaMixagem, escalaLouvor, escalaFilmagem } from '../../escalas';

function Home(){

	return(
		<>
		<div className="home">
			<div className="container">
				{/* <Escala escala={escalaLouvor}/> */}
				<Escala escala={escalaMixagem}/>
				{/* <Escala escala={escalaFilmagem}/> */}
			</div>
		</div>
		</>
	)
}

export default Home;