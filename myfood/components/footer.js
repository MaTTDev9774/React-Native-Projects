import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme'

export function Footer(props) {
	return (
		<View style={styles.controls.footer}>
			<Text style={styles.controls.footerText}>{props.title}</Text>
		</View>
	)
}
