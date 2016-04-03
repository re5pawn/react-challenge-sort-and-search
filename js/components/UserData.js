import React, { Component } from 'react';

class UserData extends Component {
		constructor(props) {
			super(props);
		}

		handleClick(clickedUser) {
			this.props.onSelected && this.props.onSelected(clickedUser);
		}

		shouldComponentUpdate(nextProps) {
			return this.props.user.id !== nextProps.user.id;
		}

		_getUserImage(imgName) {
			return `./images/${imgName}.svg`;
		}

		render() {
			let user = this.props.user;
			return (
				<tr className="user-data-item" onClick={this.handleClick.bind(this, user)}>
					<td><img src={this._getUserImage(user.image)} alt="User Image" className="user-image" /></td>
					<td>{user.name}</td>
					<td>{user.age}</td>
					<td>{user.phone}</td>
				</tr>
			);
		}
}

export default UserData;