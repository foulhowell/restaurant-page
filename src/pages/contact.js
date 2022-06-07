const displayContact = () => {
    const content = document.querySelector('#content');

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";
    contactHeader.setAttribute('id', 'contact-header');
    contactContent.appendChild(contactHeader);

    const dexterContact = document.createElement('div');
    dexterContact.classList.add('worker-contact');
    const dexterName = document.createElement('h4');
    dexterName.textContent = 'Dexter Jettster';
    const dexterNumber = document.createElement('p');
    dexterNumber.textContent = "390-202-1138";
    const dexterPic = document.createElement('img');
    dexterPic.src = "../src/img/dexter.jpeg";
    dexterPic.setAttribute('id', 'dexter-pic');
    dexterContact.appendChild(dexterName);
    dexterContact.appendChild(dexterNumber);
    dexterContact.appendChild(dexterPic);
    contactContent.appendChild(dexterContact);

    content.appendChild(contactContent);
}

export { displayContact };