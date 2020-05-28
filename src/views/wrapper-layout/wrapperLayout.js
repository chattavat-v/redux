import React from "react";

const wrapperLayout = (props) => {
	return (
		<div className="App">
			<header className="App-header">{props.children}</header>
		</div>
	);
};

export default wrapperLayout;
