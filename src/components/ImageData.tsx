import { useEffect, useState } from "react";
import axios from "axios";

function ImageData({ day }: { day?: string }) {
	const [data, setData] = useState({
		title: "",
		url: "",
		explanation: "",
		date: "",
	});
	useEffect(() => {
		const url = "https://localhost:5001/?q=" + day;
		axios(url)
			.then((result) => setData(result.data))
			.catch(console.error);
	}, [day]);
	return (
		<div>
			<h1> {data.title} </h1>
			<h2> Nasa Image of the Day: {data.date} </h2>
			<img src={data.url} alt={data.explanation} />
			<p> {data.explanation} </p>
		</div>
	);
}
export default ImageData;
