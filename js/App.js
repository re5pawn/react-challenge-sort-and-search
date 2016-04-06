import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			searchQuery: ''
		};

		this._loadData();
	}

	_loadData() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'data.json');

		xhr.onload = () => {
		    if (xhr.status === 200) {
		    	let users = JSON.parse(xhr.response);
		    	this.setState({ users });
		    	this._users = users;
		    }
		}

		xhr.onerror = () => {
		    console.error('Data loading error');
		}

		xhr.send();
	}

	updateUsers(query) {
		if (query) {
			var filteredData = this._users.filter(el => el.name.toLowerCase().includes(query));
		}
		
		this.setState({
			users: query ? filteredData : this._users,
			searchQuery: query
		});
	}

	sortUsers(key, order) {
		console.log('sortUsers', key, order);

		let users = this.state.users.sort((a, b) => {
			switch (key) {
				case 'name':
					return order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
				case 'age':
					return order ? a.age - b.age : b.age - a.age;
			}
		});

		this.setState({ users });
	}

	render() {
		return (
			<div className="container app">
				<SearchBar onChange={this.updateUsers.bind(this)} />

				<ToolBar onSort={this.sortUsers.bind(this)} />

				<UserList users={this.state.users} mark={this.state.searchQuery} />
			</div>
		);
	}
}
