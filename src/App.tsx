import ViewImage from './components/ViewImage';
import './App.css';
import Logo from './components/Logo';

function App() {
	return (
		<div className="App">
			<div className="topbox">
				<div className="top description">
					<div id="description-header">Lynx Search</div>
					<div id="description-text">
						Lynx Search is a website that communicates with the
						official NASA api to retrieve the astronomy image of the
						day. It uses Java and Spring Boot REST in the back end,
						and React.js in the front end.
					</div>
				</div>
				<div className="header-parent">
					<div className="top header"> Nasa Image of the Day </div>
				</div>
				<div className="top logo">
					<Logo />
				</div>
			</div>
			<ViewImage />
		</div>
	);
}

export default App;
