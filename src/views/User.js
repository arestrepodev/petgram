import React, { useContext } from "react";
import { Context } from "../Context";
import SubmitBtn from "../components/SubmitBtn";

export const User = () => {
	const { removeAuth } = useContext(Context);
	return (
		<>
			<h1>User</h1>
			<SubmitBtn onClick={removeAuth}>Cerrar Sesión</SubmitBtn>
		</>
	);
};
