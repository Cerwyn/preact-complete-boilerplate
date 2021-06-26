import { html } from 'htm/preact';
import { Router } from 'preact-router';

import Header from './header';
import { StoreProvider } from '../services/StoreContext';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => {
	return html`
	<div id="app">
		<${StoreProvider}>
			<${Header} />
			<${Router}>
				<${Home} path="/" />
				<${Profile} path="/profile/" user="me" />
				<${Profile} path="/profile/:user" />
			</${Router}>
		</${StoreProvider}>
	</div>
	`;
}

export default App;
