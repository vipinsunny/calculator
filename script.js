// function displayValue(num){
    // let res=document.querySelector("#result")
    // res.value+=num
    var displayValue=(num)=>result.value+=num
// }
// function clearBox(){
    // document.querySelector("#result").value="";
var clearBox=()=>result.value=""
// }
// function evaluateexpression(){
//     let res=document.querySelector("#result")
//     let cur_value=res.value
//     let result=eval(cur_val)
//     res.value=result.

// }
var evaluateExpression=()=>result.value=eval(result.value)
function backSpace(){
    let res=document.querySelector("#result")
    let cur_value=res.value
    res.value=cur_value.slice(0, -1)
}