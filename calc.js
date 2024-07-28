var input=prompt("enter the n value")


function fabi(n){

var output=[]

// Convert the input to a number
n=parseInt(n)

if(n===1){
    return output=[0]
}
else if(n===2){
    return output=[0 ,1]
}
else{
    output=[0,1]
// the 1st 2 num are already initialized
    for(var i=2;i<n;i++){
        output.push(output[output.length-2]+output[output.length-1])
    }
}
return output

}
var res=fabi(input)
alert(res)