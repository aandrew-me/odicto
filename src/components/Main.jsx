import { useRef, useState } from "react";
import Info from "./Info";
import Menu from "./Menu";
import dictionary from "../scripts/dictionary.js"


export default function Main() {
	const searchTxt = useRef();
	const [errorTxt, setErrorTxt] = useState("");
	const [info, setInfo] = useState();

	function getMeaning(item) {
		const input = item
			? item.toUpperCase()
			: String(searchTxt.current.value.toUpperCase());
		if (item) {
			searchTxt.current.value = item;
		}
		console.log("Input is", input);
		if (input) {
			const dictObj = "D" + input.slice(0, 1).toUpperCase();
			let definition;
			try {
				definition = dictionary[dictObj][input];
				console.log(definition);
			} catch (error) {
				setErrorTxt("Enter a word");
				setInfo("");
			}

			if (definition) {
				setErrorTxt("");
				setInfo(
					<Info
						props={{
							word: input,
							...definition,
							getMeaning: getMeaning,
						}}
					/>
				);
			} else {
				setErrorTxt("The word is not in Dictionary");
				setInfo("");
			}
		} else {
			setErrorTxt("Enter a word");
			setInfo("");
		}
	}

	function handleKeyPress(event) {
		if (event.key === "Enter") {
			getMeaning();
		}
	}
	
	
	function openMenu(){
		const menuElement = getId("menu")

		if (menuElement.style.display == "block"){
			getId("menu").style.display = "none"

		}
		else{
			getId("menu").style.display = "block"
		}
	}

	function getId(id){
		return document.getElementById(id)
	}

	return (
		<div>
			<img src={"/menu.png"} alt="menu" id="menuBtn" onClick={openMenu}/>
			<Menu/>
			<input
				onKeyDown={handleKeyPress}
				type="text"
				id="searchBox"
				placeholder="Search Dictionary"
				ref={searchTxt}
			/>
			<button
				id="searchBtn"
				onClick={() => {
					getMeaning("");
				}}
			>
				Search
			</button>
			<div id="definition">
				<h3 className="errorTxt">{errorTxt}</h3>
				{info}
			</div>
		</div>
	);
}
