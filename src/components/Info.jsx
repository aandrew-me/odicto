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
			<div className="elements" key={Math.random().toFixed(10).toString().slice(2)}>
				<p
					key={Math.random().toFixed(10).toString().slice(2)}
					className="partsOfSpeech"
					title="Part of Speech"
				>
					{element[0]}
				</p>
				<p
					key={Math.random().toFixed(10).toString().slice(2)}
					className="meaning"
					title="Meaning"
				>
					{element[1]}
				</p>
				<div
					key={Math.random().toFixed(10).toString().slice(2)}
					className="example"
					title="Example"
				>
					{element[3].map(element => {
						return <p>{element}</p>
						})}
				</div>
			</div>
		);
	});

	

	const allSynonyms = props.props.SYNONYMS.map(item => {
		let synonyms = null
		if(props.props.SYNONYMS.length > props.props.SYNONYMS.indexOf(item) + 1){
			synonyms = <span key={item} className="synAnt" onClick={()=>{getMeaning(item)}}>{` ${item}, `}</span>
		}
		else{
			synonyms = <span key={item} className="synAnt" onClick={()=>{getMeaning(item)}}>{` ${item} `}</span>
		}
		return synonyms
	})

	
	const allAntonyms = props.props.ANTONYMS.map(item => {
		let antonyms = null
		if (props.props.ANTONYMS.length > props.props.ANTONYMS.indexOf(item) + 1){
			antonyms = <span key={item} className="synAnt" onClick={()=>{getMeaning(item)}}>{` ${item.slice(0,1).toUpperCase() + item.slice(1)}, `}</span>
		}
		else{
			antonyms = <span key={item} className="synAnt" onClick={()=>{getMeaning(item)}} >{` ${item.slice(0,1).toUpperCase() + item.slice(1)} `}</span>
		}
		return antonyms
	})

	function getMeaning(item){
		props.props.getMeaning(item)
	}

	// Rendering part
	return (
		<div id="info">
			<h1 id="h1">{props.props.word}</h1>
			{elements}
			<br></br>
			<span className="synonymTxt">{allSynonyms? "Synonyms: " : ""}</span>
			<span>{allSynonyms? allSynonyms: ""}</span>
			<br></br>
			<br></br>
			<span className="antonymTxt">{allAntonyms.length > 0? "Antonyms: " : ""}</span>
			<span>{allAntonyms? allAntonyms: ""}</span>

		</div>
	);
}
