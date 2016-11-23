import React, { PropTypes } from 'react';
import * as Utils from '../utils';

let order = false;

const SortByName = ({ onSort }) => {
	const handleClick = (key) => {
		order = !order;
		onSort(key, order);
	};

	return (
		<button className="btn btn-info btn-sm" type="button" onClick={() => handleClick('name')}>
				<i className={Utils.concatClassNames(getOptClassName('glyphicon-sort-by-alphabet', order), 'glyphicon')}></i>
				Sort by name
		</button>
	);
};

SortByName.propTypes = {
	onSort: PropTypes.func.isRequired
};

function getOptClassName(className, order) {
	return !order ? className : `${className}-alt`;
};

export default SortByName;