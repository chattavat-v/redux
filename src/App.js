import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCats } from "./redux/actions/cat";
import WrapperLayout from "./views/wrapper-layout/wrapperLayout";
import FormView from "./views/form-view/FormView";
import CardComp from "./components/card-comp/CardComp";
import moment from "moment";

const App = ({ fetchCats, cats }) => {
	useEffect(() => {
		fetchCats();
	}, [fetchCats]);

	return (
		<WrapperLayout>
			<h3 style={{textTransform: "uppercase"}}>Meow Story</h3>
			<div className="wrapper-body">
        <div className="wrapper-header">
          <FormView />
        </div>
				<div className="wrapper-card">
					{cats &&
						cats.map((cat) => (
							<CardComp key={cat.id}>
								<div className="card_item">
									<img src={cat.image} alt={cat.image} />
									<p>{cat.name}</p>
									<p>{moment(cat.create_date).format("YYYY-MM-DD")}</p>
								</div>
							</CardComp>
						))}
				</div>
			</div>
		</WrapperLayout>
	);
};

App.propTypes = {
	fetchCats: PropTypes.func.isRequired,
	cats: PropTypes.array,
};

const mapStateToProps = (state) => ({
	cats: state.cat.cats,
});

export default connect(mapStateToProps, { fetchCats })(App);
