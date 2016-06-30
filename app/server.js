import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './App.js';
import { baseHtml } from './baseHtml.js';

export default function handleRender(data) {
	const html = ReactDOMServer.renderToString(<App data={data} />);

	return baseHtml(html, data);
}