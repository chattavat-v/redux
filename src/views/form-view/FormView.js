import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addCats } from "../../redux/actions/cat";
import ButtonComp from "../../components/button-comp/ButtonComp";
import InputComp from "../../components/input-comp/InputComp";

const FormView = ({ addCats }) => {
	const [formData, setFormData] = useState({
		id: uuidv4(),
		name: "",
		image: "",
		date: new Date(),
	});

	const onSubmit = (e) => {
		e.preventDefault();
		addCats(formData);
		setFormData({ ...formData, id: uuidv4() });
	};

	const handleChange = (event) =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	return (
		<div className="wrapper-form">
			<h4>เพิ่มสมาชิกน้องเหมียว</h4>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="input-group">
					<label>
						Name:
						<InputComp
							type="text"
							name="name"
							onChange={(e) => handleChange(e)}
						/>
					</label>
				</div>
				<div className="input-group">
					<label>
						Image:
						<InputComp
							type="text"
							name="image"
							onChange={(e) => handleChange(e)}
						/>
					</label>
				</div>
				<ButtonComp type="submit">ADD</ButtonComp>
			</form>
		</div>
	);
};

export default connect(null, { addCats })(FormView);
