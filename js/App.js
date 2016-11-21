import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';

import { actions } from './appReducer';
import { connect } from 'react-redux';

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
				<SearchBar data={this.props.data} onSearch={this.props.onSearch} />
				<ToolBar onSort={this.props.sortData} />
				<UserList users={this.props.data} toMark={this.props.searchQuery} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    searchQuery: state.searchQuery
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
