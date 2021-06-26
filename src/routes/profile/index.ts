import { FunctionalComponent } from 'preact';
import { html } from 'htm/preact';
import { useEffect, useContext } from "preact/hooks";
import style from './style.scss';

import { StoreContext } from '../../services/StoreContext';
import { useObserver } from 'mobx-react-lite';

// Note: `user` comes from the URL, courtesy of our router
const Profile: FunctionalComponent = (props: any) => {

	const { user } = props;

	const store: any = useContext(StoreContext);

	const { counter } = store;

	useEffect(() => {
		//
	}, []);

	return useObserver(() => {
		return html`
		<div class=${style.profile}>
			<h1>Profile: ${user}</h1>
			<p>This is the user profile for a user named ${user}.</p>
		
			<p>
				<button onClick=${() => store.setCounter(1)}>Click Me</button>
				${' '}
				Clicked ${store.getCounter()} times.
			</p>
		</div>
	`;
	})
}

export default Profile;
