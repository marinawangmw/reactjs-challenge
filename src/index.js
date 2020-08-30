import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import generateStore from "./redux/store";
import * as serviceWorker from "./serviceWorker";

const store = generateStore();

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql/",
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
