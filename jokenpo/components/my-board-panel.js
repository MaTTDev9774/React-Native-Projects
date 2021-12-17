import React from 'react'
import { View, Text, Image } from 'react-native'
import { theme } from '../theme'

export function MyBoardPanel(props) {
	return (
		<View style={[theme.components.boardPanel, props.style]}>
			<Text style={[theme.components.boardTitle]}>{props.text}</Text>
			<Image source={props.image} />
		</View>
	)
}
