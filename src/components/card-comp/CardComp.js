import React from "react";

const CardComp = (props) => {
	return <div className="card_area" {...props}>{props.children}</div>;
};

export default CardComp;
