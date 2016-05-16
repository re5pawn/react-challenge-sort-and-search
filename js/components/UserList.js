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
									{this.props.users.map((u, i) => {
										return <UserData key={u.id} user={u} toMark={this.props.toMark} onSelected={this.onSelected.bind(this)} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);
		}
}

export default UserList;