window.addEventListener('scroll', e =>{
      document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content'
});


const Domain = 'sandbox676bf6bff83d418394f94cf50e561973.mailgun.org';

const Recipient = 'poman207575@gmail.com';
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {

      event.preventDefault(); 
      const formData = new FormData(form);      
      let mailInput = form.elements['mail'];
      let nameInput = form.elements['name'];

      function validStyle(elem, bul){
            if(bul){
                  elem.classList.remove('noValid')
            }else{
                  elem.classList.add('noValid');
            }
            return bul;
      }
      function validForm(mail , name){
        function validName(name){
            if(!(name.value)){
                  form.setAttribute('data-tooltip', 'Fill out the form "NAME"');
                return false;
            }else if(!(name.value.length > 2)){
                  form.setAttribute('data-tooltip', 'Name cannot be less than 3 characters');
                return false;
            }else{
                  form.removeAttribute('data-tooltip');
                return true;
            }
        }
        function validMail(mail){
            if(mail.value){
                return true;
            }else{
                  form.setAttribute('data-tooltip', 'Fill out the form "MAIL"')
                return false;
            }
        }
        return  validStyle(name, validName(name)) && validStyle(mail,validMail(mail));
      }
      function localCheck(){
            if(localStorage.getItem('send')){
                        form.setAttribute('data-tooltip', 'You have already submitted the form')
                  return false;
            }else {
                  localStorage.setItem('send', true);
                  return true;
            }
      }
    if(validForm(mailInput, nameInput) && localCheck()){
        document.getElementById('thank').style.display = 'block';
            setTimeout(()=>{document.getElementById('thank').style.opacity = '0';}, 3000)
            form.reset();
    }
});
