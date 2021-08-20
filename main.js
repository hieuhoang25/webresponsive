function checkform(){
    var susccess =  true;
    const name= document.forms["myForm"]["name"];
    const email = document.forms["myForm"]["email"];
    const subject = document.forms["myForm"]["subject"]
    const comment = document.forms["myForm"]["comment"];
    if(name.value==""){
        name.style.borderColor="red";
        susccess=false;
    }
    if(email.value==""){
        email.style.borderColor="red";
        susccess=false;
    }
    if(subject.value==""){
        subject.style.borderColor="red";
        susccess=false;
    }
    if(comment.value==""){
        comment.style.borderColor="red";
        susccess=false;
    }
    return false;
}