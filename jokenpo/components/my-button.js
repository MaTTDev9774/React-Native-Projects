import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { theme } from '../theme'

export class MyButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={[theme.components.button]} onPress={this.props.onPress}>
				<Image source={this.props.image} />
				<Text style={[theme.components.buttonLabel]}>{this.props.text}</Text>
			</TouchableOpacity>
		)
	}
}
