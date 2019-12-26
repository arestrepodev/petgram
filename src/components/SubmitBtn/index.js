import React from "react";
import { Button } from "./styles";

const SubmitButton = ({ children, onClick }) => (
	<Button onClick={onClick}>{children}</Button>
);

export default SubmitButton;
