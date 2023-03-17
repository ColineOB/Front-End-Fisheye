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
    const header = querySelector.querySelector("h2");
    const button = document.createElement('button');
    const inputType = {"prénom": 'input', "Nom": 'input', 'Email': 'input', 'Votre message': 'textarea'}

    setAttributes(button,{"class":"contact_button", "onclick": 'valide()'})
    button.textContent = "Envoyer";

    header.append(name)
    querySelector.append(createForm(inputType), button);

}

function createForm(obj) {
    const form = document.createElement( 'form' );
    for (const property in obj) {
        const div = document.createElement( 'div' );
        const label = document.createElement('label');
        const input = document.createElement(obj[property]);
        setAttributes(input,{"name":property})
        label.textContent = property;
        div.append(label, input)
        form.append(div);
    }
    return form
}

function valide() {
    const input = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].name , ": ", input[i].value);
    }
    
    console.log(textarea.name , ": ", textarea.value);
}