import React from 'react'

class FormCreateFractal extends React.Component {
	render() {
		return (
			<form className="form">
				<div className="form__field">
					<span className="form__field-name">Введите аксиому:</span>
					<input className="form__input-txt" type="text" placeholder="F" />
				</div>
				<div className="form__field">
					<span className="form__field-name">Введите координаты:</span>
					<input className="form__input-txt" type="text" placeholder="[0,0][52,12][12,12]" />
				</div>
				<div className="form__field">
					<span className="form__field-name">Введите правило:</span>
					<input className="form__input-txt" type="text" placeholder="F => F - F + + F - F" />
				</div>
				<div className="form__field">
					<span className="form__field-name">Введите угол:</span>
					<input className="form__input-txt" type="text" placeholder="60" />
				</div>
				<button className="btn btn--violet form__btn">Построить</button>
			</form>
			)
	}
}

export {FormCreateFractal}