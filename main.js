document.getElementById("contactsFormCreate").addEventListener("submit", function(event) {
    event.preventDefault();

    const color = document.getElementById("colorSelector");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("gmail");
    const phone = document.getElementById("number");

    if (color.value === "#ffffff") {
        alert("por favor, selecciona un color");
        return;
    }
    const listaContactos = document.getElementById("contacts-add");

    const contenedorContacto = document.createElement("div");
    contenedorContacto.classList.add("contacto");
    listaContactos.appendChild(contenedorContacto);

    const avatarNombreContacto = document.createElement("div");
    avatarNombreContacto.classList.add("avatar-name");
    contenedorContacto.appendChild(avatarNombreContacto);

    const avatarContacto = document.createElement("span");
    avatarContacto.textContent = name.value[0].toUpperCase();
    avatarContacto.classList.add("avatar");
    avatarContacto.style.backgroundColor = color.value;
    avatarNombreContacto.appendChild(avatarContacto);

    const nombreContacto = document.createElement("span");
    nombreContacto.textContent = name.value + " " + surname.value;
    nombreContacto.classList.add("name");
    avatarNombreContacto.appendChild(nombreContacto);

    const emailContacto = document.createElement("span");
    emailContacto.textContent = email.value;
    emailContacto.classList.add("gmail");
    contenedorContacto.appendChild(emailContacto);

    const numeroContacto = document.createElement("span");
    numeroContacto.textContent = phone.value;
    numeroContacto.classList.add("number");
    contenedorContacto.appendChild(numeroContacto);

    const counterelement = document.getElementById("contactsCounter");
    let counter = counterelement.textContent.replace(/[()]/g, '');
    counter = parseInt(counter, 10) + 1;
    counterelement.textContent = "(" + counter + ")";

    color.value = "#ffffff";
	color.style.backgroundColor = "#fff";
	color.style.color = "#000";
	name.value = "";
	surname.value = "";
	email.value = "";
	phone.value = "";
})

