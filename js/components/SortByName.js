import React, { Component } from 'react';
import * as Utils from '../utils';

class SortByName extends Component {
		constructor(props) {
			super(props);

			this.order = false;
		}

		handleClick(key) {
			this.order = !this.order;
			this.props.onSort && this.props.onSort(key, this.order);
		}

		_getOptClassName(className) {
			return !this.order ? className : `${className}-alt`;
		}

		render() {
			return (
				<button className="btn btn-info btn-sm" type="button" onClick={this.handleClick.bind(this, 'name')}>
						<i className={Utils.concatClassNames(this._getOptClassName('glyphicon-sort-by-alphabet'), 'glyphicon')}></i> Sort by name
				</button>
			);
		}
}

export default SortByName;