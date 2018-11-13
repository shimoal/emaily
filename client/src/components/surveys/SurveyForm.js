import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

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
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);
