import { useEffect } from "react";

let theme, fontSize;

function getId(id) {
	return document.getElementById(id);
}

function fontChange(size) {
	const fontSize = size || getId("fontSize").value;
	document.body.style.fontSize = fontSize + "px";
	getId("h1").style.fontSize = (20 + Number(fontSize)) + "px"
	localStorage.setItem("fontSize", fontSize);
}

function changeTheme(input) {
	const theme = input || getId("themeSelect").value;
	const root = document.querySelector(":root");

	if (theme === "dark") {
		localStorage.setItem("theme", "dark");

		root.style.setProperty("--bodyBgColor", "var(--ctp-macchiato-crust)");
		root.style.setProperty("--bodyTxtColor", "var(--ctp-macchiato-text)");
		root.style.setProperty("--menuBgColor", "var(--ctp-macchiato-base)");
		root.style.setProperty("--menuTxtColor", "var(--ctp-macchiato-text)");
		root.style.setProperty(
			"--menuInputBgColor",
			"var(--ctp-macchiato-base)"
		);
		root.style.setProperty(
			"--menuInputTxtColor",
			"var(--ctp-macchiato-base)"
		);
		root.style.setProperty(
			"--elementBgColor",
			"var(--ctp-macchiato-surface0)"
		);
		root.style.setProperty(
			"--elementTxtColor",
			"var(--ctp-macchiato-text)"
		);
		root.style.setProperty(
			"--menuInputBgColor",
			"var(--ctp-macchiato-base)"
		);
		root.style.setProperty(
			"--menuInputTxtColor",
			"var(--ctp-macchiato-text)"
		);
		root.style.setProperty("--speechColor", "var(--ctp-macchiato-blue)");
		root.style.setProperty("--synonym", "var(--ctp-macchiato-green)");
		root.style.setProperty("--antonym", "var(--ctp-macchiato-red)");
	} else {
		// Light theme
		localStorage.setItem("theme", "light");

		console.log("Changing to Light");
		root.style.setProperty("--bodyBgColor", "var(--ctp-latte-crust)");
		root.style.setProperty("--bodyTxtColor", "var(--ctp-latte-text)");
		root.style.setProperty("--menuBgColor", "var(--ctp-latte-base)");
		root.style.setProperty("--menuTxtColor", "var(--ctp-latte-text)");
		root.style.setProperty("--menuInputBgColor", "var(--ctp-latte-base)");
		root.style.setProperty("--menuInputTxtColor", "var(--ctp-latte-base)");
		root.style.setProperty("--elementBgColor", "var(--ctp-latte-surface0)");
		root.style.setProperty("--elementTxtColor", "var(--ctp-latte-text)");
		root.style.setProperty("--menuInputBgColor", "var(--ctp-latte-base)");
		root.style.setProperty("--menuInputTxtColor", "var(--ctp-latte-text)");
		root.style.setProperty("--speechColor", "var(--ctp-latte-blue)");
		root.style.setProperty("--synonym", "var(--ctp-latte-green)");
		root.style.setProperty("--antonym", "var(--ctp-latte-red)");
	}
}

function Menu() {
	useEffect(() => {
		theme = localStorage.getItem("theme");
		if (!theme) {
			theme = "dark";
		} else {
			if (theme === "light") {
				changeTheme("light");
			}
		}
		if (fontSize) {
			fontChange(fontSize);
		}
	}, []);

	return (
		<div id="menu">
			<table>
				<tbody>
					<tr>
						<td>Font Size</td>
						<td>
							<input
								className="menuInput"
								type="number"
								id="fontSize"
								defaultValue={fontSize || 18}
								onInput={() => {
									fontChange();
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>Theme</td>
						<td>
							<select
								className="menuInput"
								name="theme"
								id="themeSelect"
								onInput={() => {
									changeTheme();
								}}
							>
								<option
									value="light"
									selected={theme === "light" ? true : false}
								>
									Light
								</option>
								<option
									value="dark"
									selected={theme === "dark" ? true : false}
								>
									Dark
								</option>
							</select>
						</td>
					</tr>
					{/* <tr>
						<td>Font Family</td>
						<td>
							<select
								className="menuInput"
								name="fontFamily"
								id="fontFamilySelect"
							>
								<option value="sans-seris">Sans-Serif</option>
								<option value="serif">Serif</option>
								<option value="monospace">MonoSpace</option>
							</select>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}

export default Menu;
