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
		xhr.open('GET', this.props.data);

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

				<UserList users={this.state.data} toMark={this.state.searchQuery} />
			</div>
		);
	}
}
