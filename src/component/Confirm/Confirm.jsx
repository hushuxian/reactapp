import React,{useState} from "react";
import {render} from "react-dom";

let root = document.getElementById('root');


const Confirm = (config)=>{
	let dom = null;
	dom = <div>{config.content}
		<button>是</button> <button>否</button>
	</div>
	render(dom,root);
	
}


export default Confirm;
