// to display content each key is pressed

 function displayContent(content){
    result.value+=content
 }
 function allClear(){
    result.value=""
 }
 function evalExpression(){
    result.value=eval(result.value)
 }
 function deletelast(){
    result.value=result.value.slice(0,-1)
 }