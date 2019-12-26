import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title, Subtitle } from "./styles";

const Layout = ({ children, title, subtitle }) => (
	<>
		<Helmet>
			{title && <title>{title} - Petgram</title>}
			{subtitle && <meta name="description" content={subtitle} />}
		</Helmet>
		<Header>
			{title && <Title>{title}</Title>}
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			{children}
		</Header>
	</>
);

export default Layout;
