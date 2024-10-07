import React from 'react';
import './FilterButtons.css';

const FilterButtons = (props) => {

	return (
		<div className="filter-buttons">
			<button onClick={props.onClick} className="btn active" id="all">All</button>
			<button onClick={props.onClick} className="btn" id="furstenau">Green</button>
			<button onClick={props.onClick} className="btn" id="eby">NDP</button>
			<button onClick={props.onClick} className="btn" id="rustad">Conservative</button>
		</div>
	);
};

export default FilterButtons;