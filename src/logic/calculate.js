import Big from "big.js"

import isNumber from './isNumber';
import isOperator from './isOperator';
import operate from './operate';


const initNum = "";
export default function caculate(obj,buttonName){
	let next = obj.next,total = obj.total,operator = obj.operator;
	if(buttonName === "AC"){
		next = "", total = "", operator = null;
	}
	if(isNumber(buttonName)){
		next = next === "0" ? buttonName : (next + buttonName);

	}

	if(buttonName === "+/-"){
		
		(next = next && (-1 * parseFloat(next)).toString()) ||
		(total = total && (-1 * parseFloat(total)).toString());

	}

	if(buttonName === "%"){
		if(total && operator){
			next = operate(total,next,operator);
			total = "";
		}
		if(next){
			next = Big(next).div("100").toString();
		}
	}
	const DOT_RE = /\./g
	if(buttonName === "."){
		next = DOT_RE.test(next) ? next : (next === "" ? 0 : next ) + '.' ;
	}

	if(buttonName === "="){
		total = operator ? operate(total,next,operator) : (next || total);
		next = initNum;
		operator = null;
	}
	if(isOperator(buttonName)){
		console.log(1)
		operator = buttonName;
		total = total ? operate(total,next,operator) : next;
		next = initNum;
	}
	console.log({
	    total: total,
	    next: next,
	    operator: operator,
  	});
	return {
	    total: total,
	    next: next,
	    operator: operator,
  	};
}