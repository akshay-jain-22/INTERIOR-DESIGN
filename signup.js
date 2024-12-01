function checkPassword()
{
  let i = document.getElementById("span");
  var name = document.getElementById("fname").value;
  var contact = document.getElementById("contactno").value;
  var email = document.getElementById("email").value;
  var a = document.getElementById("set").value;
  var b = document.getElementById("confirm").value;

   if(name == "" || contact == "" || email == '')
   {
     i.innerHTML="* Enter details first *";
     i.addEventListener("click",prompt("Welcome","Username"));
     return false;
   }
  if(a == "")
  {
    i.innerHTML="* Please set and confirm password *";
    i.style.color='red';
    return false;
  }
  else if(b == "")
  {
    i.innerHTML="* Please confirm password *";
    i.style.color='red';
    return false;
  }
  if(a.length <= "3" || a.length >= "8"){
    i.innerHTML="* Password should be minimum 4 char long! *";
    i.style.color='red';
    i.style.fontSize='14px';
    return false;
  }
  if(a === b)
  {
    i.innerHTML="* Passwords Match *";
    i.style.color='green';    
    return false;  
  }
  else{
    i.innerHTML="* Passwords Don't Match *";
    i.style.color='red';
    return false;
  }
}
function showset(){
  var show = document.getElementById('set');

  if(show.type == 'password')
  {
      show.type = 'text';       
  }
  else{
      show.type = 'password';
   }
}
function show(){
  var show = document.getElementById('confirm');
  if(show.type == 'password')
  {
      show.type = 'text';  
       
  }
  else{
      show.type = 'password';
       }
}
function c(){
   if(confirm("Leaving??")){
    window.exit();
    return false;
   }
}






