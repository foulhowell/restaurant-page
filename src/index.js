import { displayHome, displayNavbar } from "./pages/home";
import { displayMenu } from "./pages/menu";
import { displayContact } from "./pages/contact";

displayNavbar();
displayHome();

const tabManager = (() => {
    const navbarButtons = document.querySelectorAll('.navbar-btn');
    const content = document.querySelector('#content');
    let currentTab = 'home';
    navbarButtons[0].addEventListener('click', () => {
        switchTab('home');
    })
    navbarButtons[1].addEventListener('click', () => {
        switchTab('menu');
    })
    navbarButtons[2].addEventListener('click', () => {
        switchTab('contact');
    })

    const switchTab = (tab) => {
        if (tab === 'home' && currentTab !== 'home') {
            content.removeChild(document.querySelector('#' + currentTab + '-content'));
            displayHome();
            currentTab = 'home';
        }
        else if (tab === 'menu' && currentTab !== 'menu') {
            content.removeChild(document.querySelector('#' + currentTab + '-content'));
            displayMenu();
            currentTab = 'menu';
        }
        else if (tab === 'contact' && currentTab !== 'contact') {
            content.removeChild(document.querySelector('#' + currentTab + '-content'));
            displayContact();
            currentTab = 'contact';
        }
    }
})();