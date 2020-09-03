import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import generateStore from "./redux/store";
import { client } from "./services/apollo";
import * as serviceWorker from "./serviceWorker";

const store = generateStore();

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
