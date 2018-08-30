/* @flow */

import React, { PureComponent } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import Item from './Item';
type Props = {
	dEvents: Array<DEventType>,
};

export default class DEventList extends PureComponent<Props> {
	render() {
		return (
			<ScrollView>
				{this.props.dEvents && this.props.dEvents.length > 0 ? (
					this.props.dEvents.map(dEvent => (
						<Item
							key={dEvent.id}
							dEvent={dEvent}
						/>
					))
				) : (
					<ActivityIndicator size="large" color="#000" />
				)}
			</ScrollView>
		);
	}
}
