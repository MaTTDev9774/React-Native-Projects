import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native'
import { theme } from './theme'

import pedra from './assets/pedra.png'
import papel from './assets/papel.png'
import tesoura from './assets/tesoura.png'

import { MyTitle, MyBoard, MyBoardPanel, MyButton } from './components'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		const initial = {
			user: null,
			comp: null,
			winner: '',
			styleUser: null,
			styleComp: null,
		}
		this.state = initial
	}

	render() {
		const { dimensions, components } = theme
		return (
			<SafeAreaView style={[dimensions.container]}>
				<MyTitle text="Jokenpo Alterado" />
				<MyBoard>
					<MyBoardPanel style={this.state.styleUser} text="Sua jogada" image={this.state.user} />
					<MyBoardPanel style={this.state.styleComp} text="Computador" image={this.state.comp} />
				</MyBoard>
				<View style={[components.viewResult]}>
					<Text style={[components.textResult]}>{this.state.winner}</Text>
				</View>
				<View style={[components.controls]}>
					<MyButton onPress={() => this.jogar(pedra)} image={pedra} text="Pedra" />
					<MyButton onPress={() => this.jogar(papel)} image={papel} text="Papel" />
					<MyButton onPress={() => this.jogar(tesoura)} image={tesoura} text="Tesoura" />
				</View>
			</SafeAreaView>
		)
	}

	sortearJogada() {
		const jogadas = [pedra, papel, tesoura]
		let indice = Math.floor(Math.random() * jogadas.length)
		return jogadas[indice]
	}

	informarVencedor(jogador, computador) {
		if (jogador === computador) {
			this.setState({ styleUser: null, styleComp: null })
			return 'Empate'
		} else if (
			(jogador === pedra && computador !== papel) ||
			(jogador === papel && computador !== tesoura) ||
			(jogador === tesoura && computador !== pedra)
		) {
			this.setState({ styleUser: { backgroundColor: 'green' }, styleComp: { backgroundColor: 'red' } })
			return 'Usuário vence'
		} else {
			this.setState({ styleUser: { backgroundColor: 'red' }, styleComp: { backgroundColor: 'green' } })
			return 'Computador vence'
		}
	}

	jogar(opcao = null) {
		const user = opcao
		const comp = this.sortearJogada()
		const winner = this.informarVencedor(user, comp)
		this.setState({ user, comp, winner })
	}
}
