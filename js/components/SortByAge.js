import React from 'react';
import * as Utils from '../utils';

let order = false;

const SortByName = ({ onSort }) => {
	const handleClick = (key) => {
		order = !order;
		onSort(key, order);
	};

	return (
		<button className="btn btn-info btn-sm" type="button" onClick={() => handleClick('age')}>
				<i className={Utils.concatClassNames(getOptClassName('glyphicon-sort-by-order', order), 'glyphicon')}></i>
				Sort by age
		</button>
	);
};

function getOptClassName(className, order) {
	return !order ? className : `${className}-alt`;
};

export default SortByName;
