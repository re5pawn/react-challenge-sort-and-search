import React, { Component } from 'react';
import * as Utils from '../utils';

const ActiveUser = ({user}) => {
		let optClassName = Object.keys(user).length ? '' : 'hide';

		return (
			<div className={Utils.concatClassNames(optClassName, 'panel', 'panel-default')}>
				<div className="panel-heading text-center">{user.name}</div>
				<div className="panel-body">
					<div className="text-center">
						<img src={Utils.getUserImage(user.image)} alt="User Image" className="active-user-image" />
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

export default ActiveUser;