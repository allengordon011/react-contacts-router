import React from 'react';

export default function App(props) {
	console.log(props.children);
	return (
		<div className="app">
			<h1>
				Contacts App
			</h1>
			<div>
				{props.children}
			</div>
		</div>
	);
};