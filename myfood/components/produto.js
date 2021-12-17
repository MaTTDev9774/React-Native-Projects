import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../theme'

export function Produto(props) {
	const { produto } = props || {}
	return (
		<View>
			<Image
				style={[styles.dimensions.dimensao, styles.dimensions.margin10]}
				source={produto.tipo === 1 ? produto.img : { uri: produto.img }}
			/>
			<Text>{produto.nome}</Text>
			<Text>{`R$ ${produto.valor}`}</Text>
			<Text>{`Unidade ${produto.unidade}`}</Text>
		</View>
	)
}
