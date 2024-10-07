
import './ToolTipTemplate.css';

const ToolTipTemplate = (props) => {
	console.log(props)
	const data = props.data.object;
	return `
		<div className="tooltip">
			<h3>${data.date}</h3>
			<p>A${data.candidate} heads to the riding of ${data.riding}.</p>
		</div>
	`;
};

export default ToolTipTemplate;