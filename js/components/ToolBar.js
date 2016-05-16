import React, { Component } from 'react';
import SortByName from './SortByName';
import SortByAge from './SortByAge';

const ToolBar = ({ onSort }) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="pull-right">
					<SortByName onSort={onSort} />
					<SortByAge onSort={onSort} />
				</div>
			</div>
		</div>
	);
};

export default ToolBar;
