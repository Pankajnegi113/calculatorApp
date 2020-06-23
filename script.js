var buttons=document.getElementsByClassName("btn");
var pointBtn=document.getElementById("btn-point");
var display=document.getElementById("dis-screen");
var op1;
var op2;
var op;


/* Adding listener to all the buttons
   Take first operand then on click of operator store the display data in op1 and clear display scree
   On = store the display data into op2 and perform operation using eval()
*/
for(var i=0;i<buttons.length;i++)
{
    
   buttons[i].addEventListener('click',function(){

    var val=this.innerText;
    if(val=="AC")
      display.innerText="";

    else if(val=="+")
    {
        op1=display.innerText;
        op=val;
        display.innerText="";
    }

    else if(val=="*")
    {
        op1=display.innerText;
        op=val;
        display.innerText="";
    }

    else if(val=="/")
    {
        op1=display.innerText;
        op=val;
        display.innerText="";
    }

    else if(val=="-")
    {
            op1=display.innerText;
            op=val;
            display.innerText="";
    }

    else if(val=="%")
    {
        op1=display.innerText;
        op=val;
        display.innerText="";
    }

    else if(val=="+/-")
    {
        op1=display.innerText;
        if(op1>0)
         op1="-"+op1;
        display.innerText=op1;
    }

    //error management in case of division by 0
    else if(val=="=")
    {
        op2=display.innerText;
        if(op=="/" && op2==0)
          display.innerText="ERROR...";
        else
          display.innerText=eval(op1+""+op+""+op2);
    }

    else
    {
        display.innerText+=val;  
    }
   })
}

/* for decimal managed separately*/
pointBtn.addEventListener('click',function(){
    var val=this.innerText;
    display.innerText+=val; 
})

/*color changing on mouse clicks*/
var color;
for(var i=0;i<buttons.length;i++)
{
    
    buttons[i].addEventListener('mousedown',function(){
        color=this.style.backgroundColor;
        this.style.backgroundColor="orange";
    })

    buttons[i].addEventListener('mouseup',function(){
        this.style.backgroundColor=color;
    }) 
}

/*handling separately for decimal as it takes two columns*/
pointBtn.addEventListener('mousedown',function(){
    color=this.style.backgroundColor;
    this.style.backgroundColor="orange";
})

pointBtn.addEventListener('mouseup',function(){
    this.style.backgroundColor=color;
}) 

