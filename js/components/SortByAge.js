import React, { PropTypes } from 'react';

import { concatClassNames } from '../utils';

let order = false;

const SortByAge = ({ onSort }) => {
	const handleClick = (key) => {
		order = !order;
		onSort(key, order);
	};

	return (
		<button className="btn btn-info btn-sm" type="button" onClick={() => handleClick('age')}>
				<i className={concatClassNames(getOptClassName('glyphicon-sort-by-order', order), 'glyphicon')}></i>
				Sort by age
		</button>
	);
};

SortByAge.propTypes = {
	onSort: PropTypes.func.isRequired
};

function getOptClassName(className, order) {
	return !order ? className : `${className}-alt`;
};

export default SortByAge;
