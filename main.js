class Navbar {
    constructor(target, menu) {
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            this.btn = target;
            this.menu = menu;

            this.btn.addEventListener('click', () => {
                this.open();
            });
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        
    }

    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }

        this.isopen = !this.isopen;
    }
}

const navbar = new Navbar(
    document.querySelector(".menu-btn"),
    document.querySelector(".menu-list")
);

document.getElementById("linkedin").addEventListener("click", linked);

document.getElementById("instagram").addEventListener("click", insta);

document.getElementById("github").addEventListener("click", gitHub);
    
function linked() {
       window.location.assign("https://www.linkedin.com/in/erdoganelma/");
    }
    
function insta() {
       window.location.assign("https://www.instagram.com/erdogan21/");
    }
    
function gitHub() {
       window.location.assign("https://github.com/Erdogan90/");
    }