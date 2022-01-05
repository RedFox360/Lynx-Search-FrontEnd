import { useState } from "react";
import ImageData from "./ImageData";
import "./viewImage.css";

function ViewImage() {
	const [date, setDate] = useState("");
	const [passDay, setDay] = useState("");
	const handleInputChange = (e: any) => setDate(e.target.value);
	const handleSubmit = () => setDay(date);
	return (
		<div className="image-and-form">
			<div className="input-and-submit">
				<input
					type="text"
					name="enter date"
					id="input"
					size={8}
					maxLength={10}
					onChange={handleInputChange}
				/>
				<button onClick={handleSubmit} id="submit-button">
					{" "}
					Submit{" "}
				</button>
			</div>
			<ImageData day={passDay} />
		</div>
	);
}
export default ViewImage;
