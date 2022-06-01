const displayHome = () => {
    const content = document.querySelector('#content');

    const homeContent = document.createElement('div');
    homeContent.setAttribute('id','home-content');

    const homeHeader = document.createElement('h1');
    homeHeader.textContent = "Dexter's Diner";
    homeHeader.setAttribute('id', 'home-header');
    homeContent.appendChild(homeHeader);

    const homePara = document.createElement('div');
    homePara.textContent = "Well, whaddya know! Dexter's Diner is the #1 spot on Coruscant. Need a quick bite or drink? Our owner and chef Dex will get you fixed right up alongside our great wait staff. Frequented by Jedi Master Obi-Wan Kenobi!";
    homePara.setAttribute('id','home-paragraph');
    homeContent.appendChild(homePara);

    const dinerImg = document.createElement('img');
    dinerImg.src = '../src/img/dexter-diner.jpeg';
    dinerImg.setAttribute('id', 'home-img');
    homeContent.appendChild(dinerImg);

    content.appendChild(homeContent);
}

const displayNavbar = () => {
    const content = document.querySelector('#content');

    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('navbar-btn');
    homeBtn.textContent = 'Home';
    navbar.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('navbar-btn');
    menuBtn.textContent = 'Menu';
    navbar.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('navbar-btn');
    contactBtn.textContent = 'Contact';
    navbar.appendChild(contactBtn);

    content.appendChild(navbar);
}

export {displayHome, displayNavbar};