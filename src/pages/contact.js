const displayContact = () => {
    const content = document.querySelector('#content');

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact";
    contactHeader.setAttribute('id', 'contact-header');
    contactContent.appendChild(contactHeader);

    content.appendChild(contactContent);
}

export { displayContact };