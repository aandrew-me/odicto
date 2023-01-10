import { useRef, useState } from "react";
import Info from "./Info"
import dictionary from "../pages/dictionary";

export default function Main() {
	const searchTxt = useRef();
	const [word, setWord] = useState("");
	const [errorTxt, setErrorTxt] = useState("");
	const [info, setInfo] = useState();

	function getMeaning() {
		const input = searchTxt.current.value.toUpperCase();
        if (input){
            const dictObj = "D" + input.slice(0, 1).toUpperCase();
            console.log(dictionary[dictObj][input]);
            const definition = dictionary[dictObj][input];
    
            if (definition) {
                setErrorTxt("");
                setInfo((<Info props={{word:input, ...definition}}/>))
            } else {
                setErrorTxt("The word is not in Dictionary");
                setInfo("")
            }
        }
        else{
            setErrorTxt("Enter a word");
            setInfo("")
        }
		
	}
    function handleKeyPress(event) {
        if (event.key === "Enter") {
          getMeaning()
        }
      }
    

	return (
		<div>
			<input
                onKeyDown={handleKeyPress}
				type="text"
				id="searchBox"
				placeholder="Search Dictionary"
				ref={searchTxt}
			/>
			<button id="searchBtn" onClick={getMeaning}>
				Search
			</button>
			<div id="definition">
				<h3 className="errorTxt">{errorTxt}</h3>
                {info}
			</div>
		</div>
	);
}
