import React from "react"
import Confirm from "./Confirm"

class App extends React.Component{
	
	render(){
		return(
			<div></div>
		)
	}
	async componentDidMount(){
	    let res = await Confirm({content:"确定删除吗"});
	    if(res) {
	        console.log("是")
	    } else {
	        console.log("否")
	    }
	}
}

export default App;