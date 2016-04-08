import React, { Component } from 'react';
import * as Utils from '../utils';

class UserData extends Component {
		constructor(props) {
			super(props);
		}

		handleClick(clickedUser) {
			this.props.onSelected && this.props.onSelected(clickedUser);
		}

		shouldComponentUpdate(nextProps) {
			//return this.props.user.id !== nextProps.user.id;

			return true;
		}

		_getMarkedName(name, mark) {
			let start = name.toLowerCase().indexOf(mark);
			let finish = mark.length;

			let markPart = name.substr(start, finish);
			let firstPart = name.substr(0, start);
			let lastPart = name.substr(start + finish);

			return <span>{firstPart}<strong style={{color: '#00D8FF'}}>{markPart}</strong>{lastPart}</span>;
		}

		render() {
			let user = this.props.user;
			let mark = this.props.mark;

			return (
				<tr className="user-data-item" onClick={this.handleClick.bind(this, user)}>
					<td><img src={Utils.getUserImage(user.image)} alt="User Image" className="user-image" /></td>
					<td>{this._getMarkedName(user.name, mark)}</td>
					<td>{user.age}</td>
					<td>{user.phone}</td>
				</tr>
			);
		}
}

export default UserData;