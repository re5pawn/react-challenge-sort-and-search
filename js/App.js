import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';
import { userPropType } from './common-prop-types';
import { actions } from './appReducer';

class App extends Component {
	constructor(props) {
		super(props);

		this._loadData();
	}

	_loadData() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', this.props.dataUrl);

		xhr.onload = () => {
		    if (xhr.status === 200) {
		    	this.initialUsers = JSON.parse(xhr.response);
		    	this.props.onDataLoaded(this.initialUsers);
		    }
		}

		xhr.onerror = () => {
		    console.error('Data loading error');
		}

		xhr.send();
	}

	render() {
		return (
			<div className="container app">
				<SearchBar onSearch={this.props.onSearch} />
				<ToolBar onSort={this.props.sortData} />
				<UserList users={this.props.data} />
			</div>
		);
	}
}

App.propTypes = {
  data: PropTypes.arrayOf(userPropType),
  onDataLoaded: PropTypes.func,
  onSearch: PropTypes.func,
  sortData: PropTypes.func,
  dataUrl: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDataLoaded: (data) => {
      dispatch({ type: actions.DATA_LOADED, data });
    },
    onSearch: (query) => {
    	dispatch({ type: actions.SEARCH_QUERY_CHANGED, value: query });
    },
    sortData: (key, order) => {
    	switch (key) {
    		case 'name':
					dispatch({ type: actions.SORT_BY_NAME, order });
					break;
				case 'age':
					dispatch({ type: actions.SORT_BY_AGE, order });
					break;
    	}
    }
  }
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
