import React from 'react'
import { Text,View,Button,StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {
	return (
		<View>
			<Text style = {styles.titleStyle}>Expense Manager</Text>
			<Text>Tap tyhe following buttons to go to appropriate section </Text>
			<Button
				title = 'Add Bills'
				onPress = {() => navigation.navigate('AddBill')}
			/>
			<Button
				title = 'View Bills'
				onPress = {() => navigation.navigate('ViewBill')}
			/>
		</View>
		)
}
const styles = StyleSheet.create({
	titleStyle:{
		fontSize : 30
	}
})
export default HomeScreen