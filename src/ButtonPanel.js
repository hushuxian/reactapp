import React from 'react';
import Button from './Button';
import Prop from 'prop-types';

import "./ButtonPanel.css"


class ButtonPanel extends React.Component {
	static types = {
		clickHandler:Prop.func
	}
	handleClick = buttonName=>{
		return this.props.clickHandler(buttonName)
	}

	render(){
		return(
			<div className="panel">
				<div>
					<Button name="AC" clickHandler="this.handleClick"/>
					<Button name="+/-" clickHandler="this.handleClick"/>
					<Button name="%" clickHandler="this.handleClick"/>
					<Button name="÷" clickHandler="this.handleClick" orange/>
				</div>
				<div>
					<Button name="7" clickHandler="this.handleClick"/>
					<Button name="8" clickHandler="this.handleClick"/>
					<Button name="9" clickHandler="this.handleClick"/>
					<Button name="×" clickHandler="this.handleClick"/>
				</div>
				<div>
					<Button name="4" clickHandler="this.handleClick"/>
					<Button name="5" clickHandler="this.handleClick"/>
					<Button name="6" clickHandler="this.handleClick"/>
					<Button name="-" clickHandler="this.handleClick"/>
				</div>
				<div>
					<Button name="1" clickHandler="this.handleClick"/>
					<Button name="2" clickHandler="this.handleClick"/>
					<Button name="3" clickHandler="this.handleClick"/>
					<Button name="+" clickHandler="this.handleClick"/>
				</div>
				<div>
					<Button name="0" clickHandler="this.handleClick" wide/>
					<Button name="." clickHandler="this.handleClick"/>
					<Button name="=" clickHandler="this.handleClick"/>
				</div>

			</div>
		);
	}
}

export default ButtonPanel