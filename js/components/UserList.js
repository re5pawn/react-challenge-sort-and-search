import React, { Component } from 'react';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

class UserList extends Component {
		constructor(props) {
			super(props);

			this.state = { activeUser: {} };
		}

		componentWillReceiveProps(nextProps) {
		  this.setState({ activeUser: nextProps.users[0] || {} });
		}

		onSelected(activeUser) {
			this.setState( { activeUser });
		}

		render() {
			let users = this.props.users;
			let mark = this.props.mark;

			return (
				<div className="row">
					<div className="col-md-3">
						<ActiveUser user={this.state.activeUser} />
					</div>

					<div className="col-md-9">
						<div className="table-responsive">
							<table className="table table-striped table-bordered table-hover">
								<thead>
									<tr>
										<th>Image</th>
										<th>Name</th>
										<th>Age</th>
										<th>Phone</th>
									</tr>
								</thead>
								<tbody>
									{users.map((u, i) => <UserData key={i} user={u} mark={mark} onSelected={this.onSelected.bind(this)} />)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);
		}
}

export default UserList;