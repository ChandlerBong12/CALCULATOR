let results=document.getElementById('result')
buttons=document.querySelectorAll('button')
let screenvalue='';
for(item of buttons)
{
    item.addEventListener("click",(e)=>
    {
textvalue=e.target.innerText;
console.log(textvalue)
if(textvalue=='X')
{
    textvalue='*';
    screenvalue +=textvalue
    results.value =screenvalue;
}
else if(textvalue=='c'){
    
    screenvalue ="";
    results.value=screenvalue;
}
else if(textvalue=='=')
{
    results.value=eval(screenvalue)
}
else
{
    screenvalue +=textvalue;
    results.value=screenvalue;
}

    })
}