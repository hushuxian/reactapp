import React,{useState} from "react"
import InputNumber from "./InputNumber"

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber  onChange={e=>{
        	setValue(e);
        	console.log(value)
        }}/>
        <InputNumber defaultValue={value} onChange={e=>{
        	console.log(e)
        }}/>
        </div>
    )
}
export default App;