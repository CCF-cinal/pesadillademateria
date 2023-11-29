let name_input = document.getElementById("name");
let email_input = document.getElementById("email");
let subject_input = document.getElementById("subject");
let message_input = document.getElementById("message");
let submit_btn = document.getElementById("submit-contact");

submit_btn.addEventListener("click", (event)=>{
    event.preventDefault();
    let name = name_input.value;
    let email = email_input.value;

    let error_msg = "";

    if(name === null || name === "" || email===null || email===""){
        let missing = "";
        if(name === null || name === ""){
            missing = "name";
        }
        if(email === null || email === ""){
            if(missing.length > 0) missing = missing + " and ";
            missing = missing + "email";
        }
        

        error_msg = "Please fill the " + missing + " field, it is required information.";
    }

    if(email != null && email.length > 0 && (!email.includes('@') || !email.includes('.com'))){
        if(error_msg.length > 0) error_msg = error_msg + "\n";
        error_msg = error_msg + "The email does not have the expected format.";
    }

    if(error_msg.length > 0){
        alert(error_msg);
        return;
    }

    alert("Recieved Information \n We will send a confirmation email \n Thanks for contacting us");
});