let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");


var res=arr.sort(function(a,b){
    return a-b;
})


var b=[];
for(let i=res.length-1;i>=0;i--){
    b.push(res[i]);
}

document.write("Descending order of an array "+b);

document.write("<br><br>3rd largest number in an array "+b[2]);