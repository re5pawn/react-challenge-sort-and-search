import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			searchQuery: ''
		};

		this.updateState = this.updateState.bind(this);

		this._loadData();
	}

	_loadData() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'data.json');

		xhr.onload = () => {
		    if (xhr.status === 200) {
		    	this.initialUsers = JSON.parse(xhr.response);
		    	this.setState({data: this.initialUsers});
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

	sortUsers(key, order) {
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
				<SearchBar data={this.initialUsers} onChange={this.updateState.bind(this)} />

				<ToolBar onSort={this.sortUsers.bind(this)} />

				<UserList users={this.state.data} mark={this.state.searchQuery} />
			</div>
		);
	}
}
