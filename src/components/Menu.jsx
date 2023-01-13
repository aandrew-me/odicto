let theme = localStorage.getItem("theme")
if (!theme){
	theme = "dark"
}
const fontSize = localStorage.getItem("fontSize")
const fontFamily = localStorage.getItem("fontFamily")

function fontChange(){
	console.log(getId("fontSize").value)
}

function getId(id){
	return document.getElementById(id)
}

function Menu() {
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
								onInput={fontChange}
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
							>
								<option value="white" selected={theme==="white"? true: false}>White</option>
								<option value="dark" selected={theme==="dark"? true: false}>Dark</option>
							</select>
						</td>
					</tr>
					<tr>
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
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Menu;
