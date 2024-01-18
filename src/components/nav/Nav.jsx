import './style/NavStyle.css'
import logo from '../../assets/logo.png'

function Nav(){
	return(
		<>
		<nav>
			<div className="container">
				<img src={logo} alt="logo agape" />
				<div onClick={() => {}} className="btn-admin">admin</div>
			</div>
		</nav>
		</>
	)
}

export default Nav;