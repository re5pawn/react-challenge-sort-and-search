import React, { Component } from 'react';

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
							<button className="btn btn-info btn-sm" type="button" onClick={this.handleClick.bind(this, 'name')}>
								<i className={this._concatClassNames('glyphicon-sort-by-alphabet', 'glyphicon')}></i> Sort by name
							</button>
							<button className="btn btn-info btn-sm" type="button" onClick={this.handleClick.bind(this, 'age')}>
								<i className={this._concatClassNames('glyphicon-sort-by-order', 'glyphicon')}></i> Sort by age
							</button>
						</div>
					</div>
				</div>
			);
		}
}

export default ToolBar;