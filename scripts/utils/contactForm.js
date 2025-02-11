const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function displayForm(name) {
    const querySelector = document.querySelector(".modal");
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const br = document.createElement('br');
    const img = document.createElement('img');
    const button = document.createElement('button');
    const inputType = {"Prénom": 'input', "Nom": 'input', 'Email': 'input', 'Votre message': 'textarea'}

    setAttributes(button,{"class":"contact_button", "onclick": 'valid()'})
    setAttributes(img, {"src":"assets/icons/close.svg", "alt":"close", "onclick":"closeModal()"})
    button.textContent = "Envoyer";

    h2.textContent = 'Contactez-moi'
    h2.append(br, name)
    header.append(h2, img)
    querySelector.append(header, createForm(inputType), button);

    document.onkeydown = function(e) {
        if(e.keyCode == 27) {
            closeModal()
        }
    }
}

// Create form
function createForm(obj) {
    const form = document.createElement( 'form' );
    for (const property in obj) {
        const div = document.createElement( 'div' );
        const label = document.createElement('label');
        const input = document.createElement(obj[property]);
        setAttributes(div,{"class":"formData","data-error":"error","data-error-visible":"false"})
        setAttributes(input,{"name":property, "class":"text-control"})
        label.textContent = property;
        label.append(input)
        div.append(label)
        form.append(div);
    }
    return form
}

//if click on valid button 
function valid() {
    const input = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    const formData = document.querySelectorAll(".formData");
    var valide = true;
    
    for (let i = 0; i < formData.length; i++) {
      formData[i].dataset.errorVisible = false;
      valide = true;
    }
    
    for (let i = 0; i < input.length; i++) {
        const value = input[i].value;
        switch (input[i].name) {
            case 'Prénom':
            case 'Nom':
                if (value == "") {
                    errorMessage('Champ obligatoire', formData[i])
                }
                break;
            case 'Email':
                if (!regexEmail.test(value)){
                    errorMessage('email non valide', formData[i])
                }
                break;
        }
    }
    if (textarea.value  == "") {
        errorMessage('Champ obligatoire', textarea.parentElement)
    }
    else if (valide == true) {
        for (let i = 0; i < input.length; i++) {
    console.log(input[i].name , ": ", input[i].value);
        }
    console.log(textarea.name , ": ", textarea.value);
    }
    
}

// function error message
function errorMessage(message, formData){
    formData.dataset.error = message;
    formData.dataset.errorVisible = true;
    valide = false;
  }