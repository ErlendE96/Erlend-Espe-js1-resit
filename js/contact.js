const form1 = document.querySelector(".form-group");


function createHTML(){
    form1.innerHTML += 
    `               
                    
                    <input class="form-control" name="lastName" id="lastName" placeholder="Last name" />
                    <div class="form-error" id="lastNameError">Please enter your name</div>
                    </div>
                    
                    <input class="form-control" name="email" id="email" placeholder="email" />
                     <div class="form-error" id="emailError">Please enter your email adress</div>
                     </div>
                     
                    <input class="form-control" name="subject" id="subject" placeholder="subject" />
                   <div class="form-error" id="subjectError">Please enter your subject</div>
                   </div>
                   
                    <input class="form-control" name="message" id="message" placeholder="message" />
                    <div class="form-error" id="messageError">Please enter your message</div>
                    </div>
                    <h3 id = "sucessmessage></h3>`;
}
createHTML();

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");


function validateForm(event)  {
    event.preventDefault();

    if (checkLength(firstName.value, 3) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(subject.value, 7) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(message.value, 15) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }


}
const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);



function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}