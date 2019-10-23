import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Context from "./Context";
const client = new ApolloClient({
	// uri: "https://petgram-server.midudev.now.sh/graphql"
	uri: "https://petgram-server-arnold.restrepoarnold.now.sh/graphql"
});

const $app = document.getElementById("app");

ReactDom.render(
	<Context.Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Context.Provider>,
	$app
);
