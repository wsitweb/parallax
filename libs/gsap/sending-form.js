const form=document.getElementById('form');


function registerFormValue(event){
      event.preventDefault();
      const name = form.querySelector('[name="name"]'),
            mail = form.querySelector('[name="mail"]');
            if(name.value === ""){
                  alert(`enter a name`);      
            }else if(mail.value === ""){
                  alert(`enter a mail`);; 
            }else {
                  alert(`Thank you for your response`);;
                  console.log("Name:  " + name.value + `\n` + "Mail:  " + mail.value);
            }
            
}

form.addEventListener('submit', registerFormValue);