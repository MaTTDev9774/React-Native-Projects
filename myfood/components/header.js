import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme'

export function Header(props) {
	return (
		<View style={styles.controls.header}>
			<Text style={styles.controls.headerText}>{props.title}</Text>
		</View>
	)
}
