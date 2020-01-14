import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";

const SubmitButton = ({ children, onClick }) => (
	<Button onClick={onClick}>{children}</Button>
);

SubmitButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default SubmitButton;
