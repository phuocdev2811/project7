$('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1200: {
            item: 3
        }
    }
})

$('.feedback-carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    // autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        2000: {
            item: 1
        }
    }
})

const header = {
    init: function() {
        this.scrollNav('.headerNavbar');
        this.showMenu('.iconbar', '.menu', '.menu-add', '.submenu', '.menu-item', '.megamenu', '.remove');
    },
    showMenu: function(btn, headerMenu, menuAdd, subMenu, menuItem, megaMenu, remove) {
        let button = document.querySelector(btn);
        let listMenu = document.querySelector(headerMenu);
        button.addEventListener('click', () => {
            listMenu.classList.toggle('active');
        });
        let addMenu = document.querySelector(menuAdd);
        let menuChild = document.querySelector(subMenu);
        let removeItem = document.querySelector(remove);
        addMenu.addEventListener('click', (e) => {
            e.preventDefault();
            menuChild.classList.toggle('active');
            removeItem.classList.toggle('active');
        });
        let subMenuItem = document.querySelectorAll(menuItem);
        subMenuItem.forEach(item => {
            item.addEventListener('click', () => {
                megaMenu.classList.toggle('active');
            });
        });
    },
    scrollNav: function(navbar) {
        const header = document.querySelector(navbar);
        const getHeightNav = header.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > getHeightNav) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        });
    }
}
header.init();

const post = {
    init: function() {
        this.addBackground('.btn-date');
    },
    addBackground: function(btn) {
        let btns = document.querySelectorAll(btn);
        btns.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                btns.forEach(button => {
                    button.classList.remove('active');
                });
                button.classList.add('active');
            });
        });
    }
}
post.init();

const scrollMouse = {
    init: function() {
        this.scrollTop('.scroll-top');
    },
    scrollTop: function(scrollWindow) {
        let scroll = document.querySelector(scrollWindow);
        let getValue = scroll.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= getValue) {
                scroll.classList.add('scroll-visible');
            } else {
                scroll.classList.remove('scroll-visible');
            }
        });
        scroll.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    }
}
scrollMouse.init();

const colorChangeStyle = {
    init: function() {
        this.changeColor('.color-btn', '.color-chooser', '.theme', '.logo-img');
    },
    changeColor: function(colorBtn, colorChoose, bgColor, images) {
        let colorButton = document.querySelector(colorBtn);
        let colorChooser = document.querySelector(colorChoose);
        let bg = document.querySelectorAll(bgColor);
        colorButton.addEventListener('click', (e) => {
            e.preventDefault();
            colorButton.classList.toggle('opened');
            colorChooser.classList.toggle('active');
        });
        bg.forEach(element => {
            element.addEventListener('click', () => {
                let selectAllImg = document.querySelectorAll(images);
                selectAllImg.forEach(image => {
                    let imgUrl = image.getAttribute('data-src');
                });
            });
        });
    }
}
colorChangeStyle.init();

const counter = {
    init: function() {
        this.visualCounter('.counter-value');
    },
    visualCounter: function(counterItem) {
        let counterIndex = document.querySelectorAll(counterItem);
        counterIndex.forEach(item => {
            item.innerText = '0';
            let counterUpdate = () => {
                let value = +item.getAttribute('data-target');
                const c = +item.innerText;
                const increament = Math.random() * 5;
                if (c < value) {
                    item.innerText = Math.ceil(c + increament);
                    setTimeout(counterUpdate, 10);
                } else {
                    item.innerText = value;
                }
            }
            counterUpdate();
        });
    }
}
counter.init();