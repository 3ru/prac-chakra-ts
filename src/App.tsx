import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ChakraProvider>
	);
};
