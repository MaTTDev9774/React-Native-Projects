import React from 'react'
import { Image, View, Text } from 'react-native'
import { Header, Footer, Container, Produto } from './components'
import { styles } from './theme'
import { FirebaseService } from './services'

export default class App extends React.Component {
	state = { dados: null }

	componentDidMount() {
		FirebaseService.getDataList1('produtos', dados => this.setState({ dados }), 10)
	}

	render() {
		const { dimensao, margin10 } = styles.dimensions
		const { dados } = this.state
		return (
			<View style={{ flex: 1, backgroundColor: '#ff0000' }}>
				<Header title="My Food" />
				<Container>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Text>{this.state.loadingCount > 0 ? 'Carregando' : ''}</Text>
						{dados && dados.map((e, i) => <Produto produto={e} key={i} />)}
					</View>
				</Container>
				<Footer title="Copyright 2021" />
			</View>
		)
	}
}
