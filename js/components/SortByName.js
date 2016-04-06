import React, { Component } from 'react';

class SortByName extends Component {
		constructor(props) {
			super(props);

			this.order = false;
		}

		handleClick(key) {
			this.order = !this.order;
			this.props.onSort && this.props.onSort(key, this.order);
		}

		_concatClassNames(addClassName, ...classNames) {
			addClassName = this._getOptClassName(addClassName);
			return classNames.concat(addClassName).join(' ');
		}

		_getOptClassName(className) {
			return !this.order ? className : `${className}-alt`;
		}

		render() {
			return (
				<button className="btn btn-info btn-sm" type="button" onClick={this.handleClick.bind(this, 'name')}>
						<i className={this._concatClassNames( 'glyphicon-sort-by-alphabet', 'glyphicon')}></i> Sort by name
				</button>
			);
		}
}

export default SortByName;