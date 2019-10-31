import React from "react"
import Confirm from "./Confirm2"

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		
		return(
			<div ></div>
		)
	}
	async componentDidMount(){
	    let res = await Confirm("确定删除吗");
	    if(res) {
	        console.log("是")
	    } else {
	        console.log("否")
	    }
	}
}

export default App;