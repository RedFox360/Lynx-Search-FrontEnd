import { useEffect, useState } from "react";

function ImageData({ day }: { day?: string }) {
	const [data, setData] = useState({
		// PLACEHOLDERS
		title: "<title>",
		url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.realclearlife.com%2Fwp-content%2Fuploads%2F2018%2F03%2FMonaLisa.jpg&f=1&nofb=1",
		explanation:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet eu urna non blandit. Aliquam faucibus tincidunt nisl, id auctor mauris dapibus a. Phasellus ac nisl viverra, commodo urna non, interdum justo. Sed a magna ac nisl egestas commodo vitae ut leo. Morbi ante eros, congue ut lectus non, vulputate eleifend lorem. Maecenas lobortis, nibh a varius aliquet, augue lorem placerat nisi, nec luctus velit dolor ac nisi. Praesent quis efficitur purus, in finibus augue. Donec sit amet auctor purus, ac rhoncus enim. Integer in fringilla lorem.  Aliquam lorem mi, pulvinar ut suscipit eget, tincidunt sollicitudin lacus. Nunc quis erat lorem. Proin cursus nunc a velit hendrerit, blandit semper quam dapibus. Pellentesque posuere posuere odio, ac faucibus nibh accumsan vitae. Donec auctor orci lacus, ut tincidunt sem commodo ut. Phasellus volutpat ante ut orci posuere, nec porttitor justo vestibulum. Integer eget vulputate tortor.",
		date: "<date>",
	});
	useEffect(() => {
		console.log(
			"[App]:  Doing an AJAX call for query='" + day + "'."
		);
		fetch("https://localhost:5001/?q=" + day, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "GET",
			mode: "cors",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Not 2xx response");
				} else {
					return response.json();
				}
			})
			.then(setData, (error) => {
				console.log(error);
			});
	}, [day]);
	return (
		<div>
			<h1> {data.title} </h1>
			<h2> Nasa Image of the Day: {data.date} </h2>
			<img id="nasa-image" src={data.url} alt={data.explanation} />
			<p> {data.explanation} </p>
		</div>
	);
}
export default ImageData;
