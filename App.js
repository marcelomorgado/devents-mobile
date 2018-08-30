/* @flow */
import * as React from 'react';
// $FlowFixMe
import 'babel-preset-react-native-web3/globals';

import { TabNavigator } from 'react-navigation';

import Main from './src/DEvents/Main';
import Container from './src/Container';

class MainScreen extends React.PureComponent<{}> {
	static navigationOptions = {
		tabBarVisible: false,
	};
	render() {
		return <Main />;
	}
}

export default class App extends React.PureComponent<{}> {
	render() {
		return (
			<Container>
				<MainScreen />
			</Container>
		);
	}
}
