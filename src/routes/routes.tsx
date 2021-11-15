import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"

import Home from "../pages/Home"

const Routes = () => {
	const { Screen, Navigator } = createNativeStackNavigator()
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Home" component={Home} />
			</Navigator>
		</NavigationContainer>
	)
}
const Options = {}
export default Routes
