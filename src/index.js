import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	// uri: "https://petgram-server.midudev.now.sh/graphql"
	uri: "https://petgram-server-arnold.restrepoarnold.now.sh/graphql"
});

const $app = document.getElementById("app");

ReactDom.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	$app
);
