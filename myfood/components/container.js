import React from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from '../theme'

export function Container(props) {
	return (
		<View style={styles.controls.container}>
			<ScrollView>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{props.children}</View>
			</ScrollView>
		</View>
	)
}
