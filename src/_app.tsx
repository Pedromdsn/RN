import { StatusBar } from "expo-status-bar"
import React from "react"

import Routes from "./routes/routes"

const App = () => {
	return (
		<>
			<StatusBar style="auto" hidden />
			<Routes />
		</>
	)
}

export default App
