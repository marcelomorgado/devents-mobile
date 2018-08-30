import React, { Component } from 'react';
import DEventList from './DEventList';
import Contract from 'truffle-contract';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor: '#cccccc',
	},
	spacer: { flex: 1 },
});

type State = {
	dEvents: Array<DEventType>,
};

class Main extends Component<Props, State> {
	state = {
		dEvents: [],
	};
	componentWillMount() {

	}
	componentDidMount() {

		let list = [
			{
				id: 0,
				title: 'Anarchapulco',
				imageUrl: 'https://ipfs.io/ipfs/QmUwZjYy5JYaAVwF3WXSQmasPK4KhdiVpWLVXxa4ewk7EV',
				shortInfo: 'Make Anarchy Great Again',
				url: 'https://anarchapulco.com/',
				dateLabel: 'feb 14 - feb 17, 2019',
				price: 2
			},
			{
				id: 1,
				title: 'Build on Bitcoin',
				imageUrl: 'https://ipfs.io/ipfs/QmUwZjYy5JYaAVwF3WXSQmasPK4KhdiVpWLVXxa4ewk7EV',
				shortInfo: 'Building On Bitcoin is an event for the technical community focusing on building Bitcoin protocol and applications on top of it.',
				url: 'https://building-on-bitcoin.com/',
				dateLabel: 'jul 3 - jul 4, 2018',
				price: 1.5
			}
		];

		this.setState({ dEvents: list });
	}

	render() {
		return (
			<View style={styles.box}>
				<DEventList
					dEvents={this.state.dEvents}
				/>
				<View style={styles.spacer} />
			</View>
		);
	}
}

export default Main;
