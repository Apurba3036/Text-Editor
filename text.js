document.getElementById('left').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textAlign="left";
  
  

})
document.getElementById('right').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textAlign="right";

  

})
document.getElementById('justify').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textAlign="justify";

  

})
document.getElementById('center').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textAlign="center";

  

})
document.getElementById('italic').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.fontStyle="italic";

  

})
document.getElementById('bold').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.fontWeight="600"

  

})
document.getElementById('Uppercase').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textTransform="uppercase";

  

})
document.getElementById('lowercase').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.textTransform="lowercase";

  

})
document.getElementById('capitalize').addEventListener('click',function(){

 document.getElementById('floatingTextarea2').style.textTransform="capitalize";

  

})


function f3(){

    document.getElementById('floatingTextarea2').style.fontSize="50px";

}
function f2(){

    document.getElementById('floatingTextarea2').style.fontSize="30px";

}
function f1(){

    document.getElementById('floatingTextarea2').style.fontSize="small";

}



document.getElementById('reset').addEventListener('click',function(){

  document.getElementById('floatingTextarea2').style.fontWeight="normal";
  document.getElementById('floatingTextarea2').style.textAlign="left";
  document.getElementById('floatingTextarea2').style.textTransform="none";
  document.getElementById('floatingTextarea2').style.fontStyle="normal";

})