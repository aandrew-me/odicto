export default function Meaning(props) {
	const meanings = props.props.MEANINGS;
	let allMeanings = [];

	for (let meaning in meanings) {
		if (meanings.hasOwnProperty(meaning)) {
			allMeanings.push(meanings[meaning]);
		}
	}

	const elements = allMeanings.map((element) => {
		return (
			<div key={Math.random().toFixed(10).toString().slice(2)}>
				<p
					key={Math.random().toFixed(10).toString().slice(2)}
					className="partsOfSpeech"
				>
					{element[0]}
				</p>
				<p
					key={Math.random().toFixed(10).toString().slice(2)}
					className="meaning"
				>
					{element[1]}
				</p>
				<p
					key={Math.random().toFixed(10).toString().slice(2)}
					className="example"
				>
					{element[3]}
				</p>
			</div>
		);
	});

	return (
		<div id="info">
			<h1>{props.props.word}</h1>
			{elements}
		</div>
	);
}
