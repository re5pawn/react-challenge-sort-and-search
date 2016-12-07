import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import UserData from './UserData';
import ActiveUser from './ActiveUser';
import { userPropType } from '../common-prop-types';
import { selectActiveUser } from '../action-creators';

class UserList extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<div className="row">
					<div className="col-md-3"
               style={{position: '-webkit-sticky', position: 'sticky', top: '15px'}}>
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

UserList.propTypes = {
  users: PropTypes.arrayOf(userPropType),
  activeUser: userPropType,
  toMark: PropTypes.string,
  selectActiveUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser,
    toMark: state.searchQuery
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectActiveUser: (id) => {
      dispatch(selectActiveUser(id));
    }
  }
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
