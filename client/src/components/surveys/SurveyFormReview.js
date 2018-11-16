import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
	return (
		<div>
			<h5>Please confirm your entries</h5>
			<div>
				{formFields.map(({ label, name }) => {
					return (
						<div key={name}>
							<label>{label}</label>
							<div>{formValues[name]}</div>
						</div>
					);
				})}
			</div>
			<button
				className="yellow darken-3 btn-flat white-text"
				onClick={onCancel}
			>
				Back
			</button>
			<button className="green btn-flat right white-text">
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps)(SurveyFormReview);
