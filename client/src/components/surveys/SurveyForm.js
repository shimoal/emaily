import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
	{
		label: "Survey Title",
		name: "title"
	},
	{
		label: "Subject Line",
		name: "subject"
	},
	{
		label: "Email body",
		name: "body"
	},
	{
		label: "Recipient List",
		name: "emails"
	}
];

class SurveyForm extends Component {
	renderFields() {
		return FIELDS.map(({ name, label }) => (
			<Field
				component={SurveyField}
				name={name}
				label={label}
				type="text"
				key={name}
			/>
		));
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || "");

	FIELDS.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value";
		}
	});

	return errors;
}

export default reduxForm({ form: "surveyForm", validate })(SurveyForm);
