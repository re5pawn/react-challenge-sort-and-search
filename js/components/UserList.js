import React, { Component } from 'react';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

import { actions } from '../appReducer';
import { connect } from 'react-redux';

class UserList extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<div className="row">
					<div className="col-md-3">
						<ActiveUser user={this.props.activeUser} />
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
										return <UserData key={u.id} user={u} toMark={this.props.toMark}
														onSelected={this.props.selectActiveUser.bind(this, u.id)} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);
		}
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser,
    toMark: state.searchQuery
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectActiveUser: (id) => {
      dispatch({ type: actions.SELECT_ACTIVE_USER, id });
    }
  }
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
