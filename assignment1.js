var salary=parseInt(prompt("Enter your salary"));
var ans;
if(salary<=250000){
    alert("No Tax");
}
else if(salary>250000 && salary<=500000)
{
    ans=(salary*5)/100;
    alert("tax is" + ans);
}
else if(salary>500000 && salary<=1000000)
{
    ans=(salary*20)/100;
    alert("tax is" + ans);
}
else if(salary>1000000)
{
    ans=(salary*30)/100;
    alert("tax is" + ans);
}
else{
    alert("Invalid Amount");
}


