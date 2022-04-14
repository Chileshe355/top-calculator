//basic calc oprations
function multi(a,b){
    return a*b
   }
   
   function add(a,b){
    return a+b
   }
   
   function minus(a,b){
    return a-b
   }
   
   function divide(a,b){
    return a/b
   }
   
   function operate(func,a,b){
    return func(a,b)
   }
   
   const clear = function(){
     display.innerText= 0 ;
     
     
   }
   /*writing input to display field*/
   let display=document.querySelector('.display');
   let operand=document.querySelectorAll('.operand');
   let operator=document.querySelectorAll('.operator');
   let clearBtn=document.querySelector('.clear');
   let equalsBtn=document.querySelector('.equals');
   display.innerText=0;
   let a=0;
   let b=0;
   let op;
   let cls;
   
   clearBtn.addEventListener('click',clear)
   
   function reply_click(clicked_class)
   {
     cls= clicked_class;  
     if(cls=='clear operator'){
       a=0;
       clear()
     }
     else{
       a= parseInt(display.innerText)
       clear()
     }
     
     if(cls=='plus operator'){
       op=add
     }
     if(cls=='minus operator'){
       op=minus
     }
     if(cls=='mulitply operator'){
       op=multi
     }
     if(cls=='divide operator'){
       op=divide
     }
    
   }
   
   equalsBtn.addEventListener('click',()=>{
       b= parseInt(display.innerText)
       console.log(b)
     display.innerText=operate(op,a,b);
   })
     for(let i=0;i<operand.length;i++){
     operand[i].addEventListener('click',()=>{
        display.innerText+=operand[i].value;
     })
   }