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

	let synonyms = ""
	props.props.SYNONYMS.forEach(item => {
		synonyms += ` ${item} `
	})

	let antonyms = ""
	props.props.ANTONYMS.forEach(item => {
		antonyms += ` ${item} `
	})
	console.log(synonyms)
	return (
		<div id="info">
			<h1>{props.props.word}</h1>
			{elements}
			<span className="synonym">{synonyms? "Synonyms: " : ""}</span>
			<span>{synonyms? synonyms: ""}</span>
			<br></br>
			<span className="antonym">{antonyms? "Antonyms: " : ""}</span>
			<span>{antonyms? "Antonyms " + antonyms: ""}</span>

		</div>
	);
}
