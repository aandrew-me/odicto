import { useState } from "react";
import Meanings from "./Meanings";

export default function Meaning(props) {
	const meanings = props.props.MEANINGS;
	let allMeanings = [];

	for (let meaning in meanings) {
		if (meanings.hasOwnProperty(meaning)) {
			allMeanings.push(meanings[meaning]);
		}
	}

  const elements = allMeanings.map(element => {
    return (
      <>
      <p className="partsOfSpeech">{element[0]}</p>
      <p className="meaning">{element[1]}</p>
      <p className="example">{element[3]}</p>
      </>
    )
  })



  return(
    <div id="info">
      <h1>{props.props.word}</h1>
      {elements}
    </div>
  );
}
