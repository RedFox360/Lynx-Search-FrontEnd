import ViewImage from "./components/ViewImage";
import "./App.css";
import Logo from "./components/Logo";

function App() {
	return (
		<div className="App">
			<div className="topbox">
				<div className="top header"> Nasa Image of the Day </div>
				<div className="top description">
					<div id="description-header">Project Description</div>
					<div id="description-text">Description here...</div>
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
