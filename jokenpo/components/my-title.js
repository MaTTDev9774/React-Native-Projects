import React from 'react'
import { Text } from 'react-native'
import { theme } from '../theme'

export function MyTitle(props) {
	return <Text style={[theme.components.title]}>{props.text}</Text>
}
