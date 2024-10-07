import React from 'react';
import InputSlider from '../InputSlider/InputSlider';
import FilterButtons from '../FilterButtons/FilterButtons';
import './OverlayPanel.css';

const OverlayPanel = (props) => {

	return (
		<div className="overlay-panel">
			<h2 className="date">{formatDate(props.currentDate)}</h2>
			<InputSlider 
				currentDate={props.date}
				sliderMax={props.sliderMax} 
				value={props.sliderValue}
				onChange={props.onChange}>
			</InputSlider>

			<FilterButtons
				onClick={props.onClick}
			></FilterButtons>
		</div>
	);
};

function formatDate(dateString) {
	const date = new Date(dateString);
	
	const monthNames = [
	  "Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
	  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
	];
  
	const month = monthNames[date.getMonth()];
	const day = date.getDate();
  
	return `${month} ${day}`;
  }

export default OverlayPanel;