/* @flow */

import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default class Container extends PureComponent<{
	children?: any,
}> {
	render() {
		return (
			<View style={styles.Container}>
				<View style={styles.Header}>
					<Text style={[styles.title]}>D&#926;vents</Text>
					<Text style={[styles.titleLine]}>A decentralized tickets marketplace for cryptoevents</Text>
				</View>


				<View style={styles.callToAction}>
					<Button
						onPress={() => {
							alert('Can be used to receive ticket from someone or during check-in if you are a event  staff member.');
						}}
						title="Receive Ticket"
						color="#2196f3"
						accessibilityLabel="Receive Ticket"
					/>

				</View>
				{this.props.children}
				<View style={styles.footerContainer}>
					<Text style={[styles.footer]}>ERC-721 Supporter</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
	},
	Header: {
		paddingTop: 40,
		paddingBottom: 20,
		paddingHorizontal: 12,
		backgroundColor: '#2196f3',
		alignItems: 'center',
	},
	callToAction: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingHorizontal: 12,
		backgroundColor: '#ffffff',
		alignItems: 'center',

	},
	titleContainer: {
		paddingHorizontal: 12,
		paddingVertical: 5,
		backgroundColor: '#62727b',
	},
	footerContainer: {
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#333',
	},
	title: {
		alignItems: 'center',
		fontSize: 16,
		paddingVertical: 5,
		color: 'white',
	},
	titleLine: {
		alignItems: 'center',
		fontSize: 14,
		paddingVertical: 5,
		color: 'white',
	},
	footer: {
		alignItems: 'center',
		fontSize: 12,
		paddingVertical: 5,
		color: 'white',
	},
});
