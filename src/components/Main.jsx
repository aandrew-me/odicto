import { useEffect, useRef, useState } from "react";
import Info from "./Info";
import menuIcon from "../menu.png";
import Menu from "./Menu";

export default function Main() {
	const [dictionary, setDictionary] = useState();
	useEffect(() => {
		const dictionary = require("../scripts/dictionary.js").default;
		setDictionary(dictionary);
		searchTxt.current.focus()
	}, []);

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
	
	let menuIsOpen = false
	function openMenu(){
		if (menuIsOpen){
			getId("menu").style.display = "none"
			menuIsOpen = false

		}
		else{
			getId("menu").style.display = "block"
			menuIsOpen = true;
		}
	}

	function getId(id){
		return document.getElementById(id)
	}

	return (
		<div>
			<img src={menuIcon.src} alt="menu" id="menuBtn" onClick={openMenu}/>
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
