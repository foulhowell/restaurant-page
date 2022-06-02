const displayMenu = () => {
    const content = document.querySelector('#content');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Menu";
    menuHeader.setAttribute('id', 'menu-header');
    menuContent.appendChild(menuHeader);


    content.appendChild(menuContent);
}

export { displayMenu };