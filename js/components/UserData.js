import React, { Component, PropTypes } from 'react';

import * as Utils from '../utils';
import { userPropType } from '../common-prop-types';

const _getMarkedName = (name, mark) => {
	let start = name.toLowerCase().indexOf(mark);
	let finish = mark.length;

	let markPart = name.substr(start, finish);
	let firstPart = name.substr(0, start);
	let lastPart = name.substr(start + finish);

	return <span>{firstPart}<strong style={{color: '#00D8FF'}}>{markPart}</strong>{lastPart}</span>;
};

const UserData = ({ onSelected, user, toMark }) => {
	return (
		<tr className="user-data-item" onClick={() => onSelected(user)}>
			<td><img src={Utils.getUserImage(user.image)} alt="User Image" className="user-image" /></td>
			<td>{_getMarkedName(user.name, toMark)}</td>
			<td>{user.age}</td>
			<td>{user.phone}</td>
		</tr>
	);
};

UserData.propTypes = {
	onSelected: PropTypes.func,
	user: userPropType,
	toMark: PropTypes.string
};

export default UserData;