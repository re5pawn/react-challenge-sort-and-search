import React, { Component } from 'react';
import SortByName from './SortByName';
import SortByAge from './SortByAge';

class ToolBar extends Component {
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
				<div className="row">
					<div className="col-md-12">
						<div className="pull-right">
							<SortByName onSort={this.props.onSort.bind(this)} />
							<SortByAge onSort={this.props.onSort.bind(this)} />
						</div>
					</div>
				</div>
			);
		}
}

export default ToolBar;