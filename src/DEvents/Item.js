/* @flow */

import React, { PureComponent } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	Button
} from 'react-native';

import type { DEventType } from '../types';

export default class Item extends PureComponent<{
	dEvent: DEventType,
}> {
	render() {
		const { dEvent } = this.props;
		return (
			<View style={styles.main}>
				<View style={styles.icon}>
					<TouchableOpacity
						onPress={() =>
							Linking.openURL(dEvent.url)
						}
					>
						<Image
							style={styles.image}
							source={{
								uri: dEvent.imageUrl,
							}}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<View style={styles.rowContent}>
						<Text style={styles.rowContentTitle}>{dEvent.title}</Text>
						<Text style={styles.rowContentSubTitle}>
							{dEvent.dateLabel}
						</Text>
					</View>
				</View>
				<View style={styles.button}>
						<Button
							onPress={() => {
								alert('It can be used to transfer ticket to someone or to check-in in a event.');
							}}
							title="Send"
							color="#2196f3"
							accessibilityLabel="Send"
						/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	caption: {
		fontSize: 18,
		color: 'grey',
	},
	icon: {
		paddingHorizontal: 10,
	},
	rowContentSubTitle: {
		color: 'grey',
	},
	rowContentTitle: {
		fontSize: 16,
	},
	rowContent: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	image: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	main: {
		paddingTop: 5,
		paddingBottom: 5,

		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff',
		marginVertical: 2,
	},
	votes: {
		fontSize: 16,
		marginHorizontal: 5,
		color: 'yellow',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		borderBottomColor: '#CCC',
		justifyContent: 'space-between',
	},
	button: {
		flexDirection: 'row',
		position: 'absolute', right: 5,
		flex: 1,
		borderBottomColor: '#CCC',
		justifyContent: 'space-between',
	},
});
