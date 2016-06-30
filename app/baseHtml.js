export function baseHtml(html, initialState){
	return `<!doctype html>
	<html lang="en">

	<head>
	  <meta charset="utf-8"/>
	  <title>My Universal App</title>
	</head>

	<div id="app">${html}</div>
	<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
	<script type="text/javascript" charset="utf-8" src="/app.client.js"></script>
	</body>
	</html>`;
}