import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';

import { actions } from './appReducer';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);

		/*this.state = {
			data: [],
			searchQuery: ''
		};*/

		this.updateState = this.updateState.bind(this);

		this._loadData();
	}

	_loadData() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', this.props.dataUrl);

		xhr.onload = () => {
		    if (xhr.status === 200) {
		    	this.initialUsers = JSON.parse(xhr.response);
		    	this.props.onDataLoaded(this.initialUsers);
		    	//this.setState({data: this.initialUsers});
		    }
		}

		xhr.onerror = () => {
		    console.error('Data loading error');
		}

		xhr.send();
	}

	updateState(nextState) {
		this.setState(nextState);
	}

	sortData(key, order) {
		let users = this.state.data.sort((a, b) => {
			switch (key) {
				case 'name':
					return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
				case 'age':
					return order ? a.age - b.age : b.age - a.age;
			}
		});

		this.setState({ data: users });
	}

	render() {
		return (
			<div className="container app">
				<SearchBar data={this.initialUsers} onSearch={this.updateState.bind(this)} />

				<ToolBar onSort={this.sortData.bind(this)} />

				<UserList users={this.props.data} toMark={this.props.searchQuery} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    data: state.data || [],
    searchQuery: ''
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDataLoaded: (data) => {
      dispatch({ type: actions.DATA_LOADED, data });
    }
  }
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
