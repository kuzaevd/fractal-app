import React from 'react'
import Vivus from 'vivus'

class FractalArea extends React.Component {
	
	componentDidMount() {
		
	}

	onBtnClickHandler = () => {
		console.log('123');
		new Vivus('fractal-area', { duration: 200 });
	}

	render() {
		return (
			<React.Fragment>
				<svg width="1140px" height="500" className="fractal-area" id="fractal-area" viewBox="0 0 114 50">
				  <path className="fractal-area__line" d="M10 10 h 10 v 10 h -10 Z" />
				</svg>
				<button
					onClick={this.onBtnClickHandler} 
					className="btn"
				>Рисовать</button>
			</React.Fragment>
			)
	}
}

export {FractalArea}