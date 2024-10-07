import React, { Component } from 'react';
import DeckGL, { ArcLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
// import ToolTipTemplate from '../ToolTipTemplate/ToolTipTemplate';

import './Map.css';


export default class Map extends Component {
	map;
	popup;
	// deckgl layers
	layers = [];
	hoverInfo = {};

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			hoverInfo: {}
		};
	}

	_viewChange(viewState) {
		console.log(viewState)
	}
	_renderLayers() {
		const layers = [];
		this.props.data.forEach(d => {
			layers.push(
				new ArcLayer({
					id: d.id,
					data: d.data,
					// Styles
					autoHighlight: true,
					getHeight: 0.5,
					getSourcePosition: f => [parseFloat(f.source_lon), parseFloat(f.source_lat)],
					getTargetPosition: f => [parseFloat(f.target_lon), parseFloat(f.target_lat)],
					getSourceColor: d.color,
					getTargetColor: d.color,
					getWidth: 4,
					// interactivity
					pickable: true,
					onHover: info => {
						if (info.object) {
							this.setState({ hoverInfo: info });
						} else {
							this.setState({ hoverInfo: {} })
						}
					},
					// updates
					updateTriggers: {
						data: [this.props.data]
					}
				})
			);
		});
		return layers;
	}

	renderTooltip(info) {
		let fontColor;
		const { object, x, y } = info;
		
		if (!object) {
			return null;
		}

		switch (object.candidate) {
			case 'Eby':
				fontColor = '#FD4E27';
				break;
			case 'Furstenau':
				fontColor = '#009A44';
				break;
			case 'Rustad':
				fontColor = '#08479A';
				break;
			default:
				fontColor = '#d1d2d4';
		}

		return (
			<div className='popup' style={{cursor: 'pointer', position: 'absolute', zIndex: 100, pointerEvents: 'none', left: x + 10, top: y}}>
					<h3>{object.Date}</h3>
					<p><strong style={{color: fontColor}}>{object.candidate}</strong> travels to {object.city}, in the riding of <strong>{object.riding}</strong>. In 2020, the {object.party_incumbent} won this riding by {object.mov} points.</p>
			</div>
		);
	}
	
	render() {
		return (
			<DeckGL 
				controller={{touchRotate: true}}
				// onViewStateChange={this._viewChange}
				initialViewState={this.props.viewState}
				layers={this._renderLayers()}
				pickingRadius={10}>

				<StaticMap 
					mapboxApiAccessToken={this.props.accessToken}
					mapStyle={this.props.mapboxStyle}>
				</StaticMap>

				{this.renderTooltip(this.state.hoverInfo)}
			</DeckGL>
		);
	}
}



