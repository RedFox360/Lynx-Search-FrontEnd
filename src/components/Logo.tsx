import "./Logo.css";
import logo from "./LeagueLogo.png";

const Logo = () => (
	<div className="logo">
		<a
			href="https://www.jointheleague.org/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={logo} alt="The League of Amazing Programmers Logo" />
		</a>
		<h3 className="leagueclassname">Level 7 Lynx Search</h3>
	</div>
);

export default Logo;
