import React from "react";

const ButtonComp = (props) => {
	return <button {...props}>{props.children}</button>;
};

export default ButtonComp;
