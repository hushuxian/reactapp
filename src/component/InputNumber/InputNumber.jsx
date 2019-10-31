import React,{Component} from "react";


class InputNumber extends Component{
	render(){
		const {
			onChange
		} = this.props
		return(
			<input type="text" onChange={e=>{
				onChange(e.target.value)
			}}/>
		)

	}
}

export default InputNumber;