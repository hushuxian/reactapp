import Big from "big.js";

export default function operate(first,second,operate){
	const one = Big(first || (operate === "÷" || operate === "×" ? "1" : "0"));
	const two = Big(second || (operate === "÷" || operate === "×" ? "1" : "0"));
	if(operate === "+"){
		return one.plus(two).toString();
	}
	if(operate === "-"){
		return one.minus(two).toString();
	}
	if(operate === "×"){
		return one.times(two).toString();
	}
	if(operate === "÷"){
		if(two === "0"){
			alert("Divide by 0 error");
      		return "0";
		}
		return one.div(two).toString();
	}


	throw Error(`unknow operation '${operate}'`)
}