import React, { useContext } from "react";
import { Context } from "../Context";
import Layout from "../components/Layout";
import SubmitBtn from "../components/SubmitBtn";

export const User = () => {
	const { removeAuth } = useContext(Context);
	return (
		<Layout title="Tu Perfil" subtitle="Tus Pefil en Petgram">
			<SubmitBtn onClick={removeAuth}>Cerrar Sesión</SubmitBtn>
		</Layout>
	);
};
