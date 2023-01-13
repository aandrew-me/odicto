import dynamic from "next/dynamic";

function Menu() {
	return (
		<div id="menu">
			<table>
				<tbody>
				<tr>
					<td>Font Size</td>
					<td>
						<input className="menuInput" type="number" id="fontSize" />
					</td>
				</tr>
				<tr>
					<td>Theme</td>
					<td>
						<select className="menuInput" name="theme" id="themeSelect">
                            <option value="white">White</option>
                            <option value="dark">Dark</option>
                        </select>
					</td>
				</tr>
				<tr>
					<td>Font Family</td>
					<td>
                        <select className="menuInput" name="fontFamily" id="fontFamilySelect">
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

export default dynamic(() => Promise.resolve(Menu), {
	ssr: false
  })