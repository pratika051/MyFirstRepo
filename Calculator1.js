var screen=document.getElementById('screen')
buttons=document.querySelectorAll('button')
screenValue="";
for(item of buttons)
{
   item.addEventListener('click',function(e)
   {
       buttonText=e.target.innerText;
        if(buttonText=="*" || buttonText=="/"|| buttonText=="+"|| buttonText=="-")
        {
            screenValue+=buttonText;
            screen.value=screenValue
        }
        else if (buttonText=='C') {
           
            screenValue='';
           screen.value=screenValue;     
        }
        else if(buttonText=="=")
        {
            console.log("button=",buttonText)
            screen.value=eval(screenValue);
        }
       
        else{
            screenValue+=buttonText;
            screen.value=screenValue
        }

})

}