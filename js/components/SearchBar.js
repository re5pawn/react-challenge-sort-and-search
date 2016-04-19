import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
		constructor(props) {
			super(props);

			this.handleChange = this.handleChange.bind(this);
			this.cleanField = this.cleanField.bind(this);
		}

		componentDidMount() {
			ReactDOM.findDOMNode(this.refs.searchField).autofocus = true;
		}

		handleChange(event) {
			let query = event.target.value.trim().toLowerCase();
			this.props.onChange && this.props.onChange(query);
		}

		cleanField() {
			this.refs.searchField.value = '';
			this.props.onChange && this.props.onChange('');
		}

		render() {
			let fieldCleanerStyles = {
				position: 'absolute',
				top: 0,
				right: 0,
				padding: '8px 16px',
				color: '#2B3E50'
			};

			return (
				<div className="row">
					<div className="col-md-12">
						<div style={{position: 'relative'}}>
							<input type="text" className="form-control" placeholder="Search by name..."
							ref="searchField" onChange={this.handleChange} />
							<button type="button" className="close" style={fieldCleanerStyles}
								onClick={this.cleanField}>
								&times;
							</button>
						</div>
					</div>
				</div>
				
			);
		}
}

export default SearchBar;