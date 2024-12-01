function validate(){
    let a = document.getElementById("usn").value;
    let b = document.getElementById("psd").value;
        s = document.getElementById("p");

    //no empty inputs
    if(a == '' ||b == '')
    {
        s.innerHTML="* Please fill in Details first *";
        s.style.color='red';
        return false;
    }
    //valid password sanath2004;
      if (b !== "sanath2004") {
        s.innerHTML="* Incorrect Password *";
        s.style.color='red';
        return false;
    } else {
        s.innerHTML="* Correct *";
        s.style.color='greenyellow';
        return false;
    }
}
//To show password
function show(){
    var show = document.getElementById('psd');

    if(show.type == 'password')
    {
        show.type = 'text';             
    }
    else{
        show.type = 'password';
    }
}
function ex(){
    let car = new Map(["a",400],["b",600],["c",800]);
    car.delete("a");
    console.log(car.size);
    
    
}