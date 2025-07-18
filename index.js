function sendMail(){
        let name= document.getElementById("exampleInputEmail1").value;
       let  email= document.getElementById("email").value;
       let messag= document.getElementById("message").value;

       let params={
        from_name: name,
        email_id: email,
         message: message
       };
const serviceID ="service_3g1c028";
const templateID="template_pwv3nkc";

emailjs.send("service_3g1c028","template_pwv3nkc",params)
.then(function(res){
        // document.getElementById("exampleInputEmail1").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("message").value = "";
        // consol.log(res);
        alert("your message send successfully" + res.status);
    })
     .catch(function(err) {
      alert("Failed to send email. Error: " + err);
    });
}
    
