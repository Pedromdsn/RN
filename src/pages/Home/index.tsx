import React from "react"
import { Text, View } from "react-native"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack"

import { styles } from "./style"

interface HomeProps {
	navigation: NativeStackNavigationProp<any>
}

const Home = ({ navigation }: HomeProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Open up App.js to start working on your app!</Text>
		</View>
	)
}

export default Home
