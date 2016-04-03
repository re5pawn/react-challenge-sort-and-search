import React, { Component } from 'react';

class ActiveUser extends Component {
		constructor(props) {
			super(props);
		}

		_getUserImage(imgName) {
			if (imgName) {
				return `./images/${imgName}.svg`;
			}
		}

		_concatClassNames(addClassName, ...classNames) {
			return classNames.concat(addClassName).join(' ');
		}

		render() {
			let user = this.props.user;
			let optClassName = Object.keys(user).length ? '' : 'hide';

			return (
				<div className={this._concatClassNames(optClassName, 'panel', 'panel-default')}>
					<div className="panel-heading text-center">{user.name}</div>
					<div className="panel-body">
						<div className="text-center">
							<img src={this._getUserImage(user.image)} alt="User Image" className="active-user-image" />
						</div>
						<ul className="list-group">
							<li className="list-group-item"><b>Age:</b> {user.age}</li>
							<li className="list-group-item"><b>Favorite animal:</b> {user.image}</li>
							<li className="list-group-item"><b>Phone:</b> {user.phone}</li><hr/>
							<li className="list-group-item"><b>Favorite phrase:</b> {user.phrase}</li>
						</ul>
					</div>  
				</div>
			);
		}
}

export default ActiveUser;