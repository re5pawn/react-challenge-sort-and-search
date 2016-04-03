import React, { Component } from 'react';

class SearchBar extends Component {
		constructor(props) {
			super(props);
		}

		handleChange(event) {
			let query = event.target.value.trim().toLowerCase();
			this.props.onChange && this.props.onChange(query);
		}

		render() {
			return (
				<div className="row">
					<div className="col-md-12">
						<input type="text" className="form-control" placeholder="Search by name..."
						onChange={this.handleChange.bind(this)} />	
					</div>
				</div>
				
			);
		}
}

export default SearchBar;