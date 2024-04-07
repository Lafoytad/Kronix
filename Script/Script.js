function slider() {
    const Customer__slider = document.querySelectorAll('.Customer__slider');
    const left = document.querySelector('.Customer__before');
    const right = document.querySelector('.Customer__after');
    const Customer__sliderContent = document.querySelector('.Customer__slider-content');
    const Customer__sliderContentAll = document.querySelectorAll('.Customer__slider-content');


    let translateX = (Customer__sliderContentAll.length * -1268)-(-1268 * (Math.ceil(Customer__sliderContentAll.length / 2))); // нашли средний элемент
    const maxLength = (Customer__sliderContentAll.length - 1) * -1268;

    // Функция для обновления значения translateX
    function updateTranslateX(value) {
        translateX = value;

        for(let i of Customer__sliderContentAll) {
            i.style.transform = `translateX(${translateX}px)`;
        };

    };

    left.addEventListener('click', function() {
        translateX += 1268; // Уменьшаем значение translateX на 1268px (пример)

        if(translateX > 0) {
            translateX = maxLength;
        };

        updateTranslateX(translateX);
    });

    right.addEventListener('click', function() {
        translateX -= 1268; // Увеличиваем значение translateX на 1268px (пример)

        if(translateX < maxLength) {
            translateX = 0;
        };

        updateTranslateX(translateX);
    });
}
slider();

function FAQ() {
let NewsArticles__containerItemsItemIcon = document.querySelectorAll('.NewsArticles__container-items-item-icon');

NewsArticles__containerItemsItemIcon.forEach(function(element) {
    element.addEventListener('click', function(event) {

        element.querySelector('img').classList.toggle('NewsArticles__container-items-item-icon_active');
        element.parentElement.nextElementSibling.classList.toggle('NewsArticles__container-items-hidden_hidden');

    });
});
};
FAQ();

function scroll() {
const Bringing__itemOne = document.querySelector('#Bringing__itemOne');
const Bringing__itemTwo = document.querySelector('#Bringing__itemTwo');
const Bringing__itemThree = document.querySelector('#Bringing__itemThree');
const Bringing__itemFour = document.querySelector('#Bringing__itemFour');
const Bringing__itemFive = document.querySelector('#Bringing__itemFive');
const Bringing__headerButton = document.querySelector('.Bringing__header-button');

Bringing__itemOne.addEventListener('click', function() {
    document.querySelector('.Bringing__containerThree').scrollIntoView({ behavior: 'smooth'});
});
Bringing__itemTwo.addEventListener('click', function() {
    document.querySelector('.OurCapabilities__wrap').scrollIntoView({ behavior: 'smooth'});
});
Bringing__itemThree.addEventListener('click', function() {
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});
Bringing__itemFour.addEventListener('click', function() {
    document.querySelector('.OurBeautifulWorks').scrollIntoView({ behavior: 'smooth'});
});
Bringing__itemFive.addEventListener('click', function() {
    document.querySelector('.NewsArticles__container').scrollIntoView({ behavior: 'smooth'});
});
Bringing__headerButton.addEventListener('click', function() {
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});


const Revolution__button = document.querySelector('.Revolution__button');

Revolution__button.addEventListener('click', function() {
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});


const OurCapabilities__wrapContainerRowColumnButton = document.querySelector('.OurCapabilities__wrap-container-row-column-button');

OurCapabilities__wrapContainerRowColumnButton.addEventListener('click', function() {
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});


const Bringing__containerThreeRowColumnButton = document.querySelector('.Bringing__containerThree-row-column-button');

Bringing__containerThreeRowColumnButton.addEventListener('click', function() {
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});


const footer__contentTwoWrapperOne = document.querySelector('#footer__contentTwo-wrapperOne');
const footer__contentTwoWrapperTwo = document.querySelector('#footer__contentTwo-wrapperTwo');
const footer__contentTwoWrapperThree = document.querySelector('#footer__contentTwo-wrapperThree');
const footer__contentTwoWrapperFour = document.querySelector('#footer__contentTwo-wrapperFour');
const footer__contentTwoWrapperFive = document.querySelector('#footer__contentTwo-wrapperFive');

footer__contentTwoWrapperOne.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.Bringing__containerThree').scrollIntoView({ behavior: 'smooth'});
});
footer__contentTwoWrapperTwo.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.OurCapabilities__wrap').scrollIntoView({ behavior: 'smooth'});
});
footer__contentTwoWrapperThree.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.Pricing__containerOne-wrapper').scrollIntoView({ behavior: 'smooth'});
});
footer__contentTwoWrapperFour.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.OurBeautifulWorks').scrollIntoView({ behavior: 'smooth'});
});
footer__contentTwoWrapperFive.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.NewsArticles__container').scrollIntoView({ behavior: 'smooth'});
});

};
scroll();

function Rainbow() {
const Pricing__containerOneWrapperInnerRowButton = document.querySelector('.Pricing__containerOne-wrapper-inner-row-button');

    setInterval(function () {
    let numberOne = Math.floor(Math.random() * 235);
    let numberTwo = Math.floor(Math.random() * 235);
    let numberThree = Math.floor(Math.random() * 235);
    Pricing__containerOneWrapperInnerRowButton.style.backgroundColor = `rgb(${numberOne+20},${numberTwo+20},${numberThree+20})`;
    }, 500);
};
Rainbow();

function BookACallHidden() {
    const BookACall = document.querySelector('.BookACall__box').parentElement;


    const BookACall__button = document.querySelector('.BookACall__button');
    const BookACall__wrapperItems = document.querySelector('.BookACall__wrapper-items');
    const pattern = /^[\d+\-\s]{6,15}$/;
    
    BookACall__button.addEventListener('click', function() {
        const inputElement = BookACall__wrapperItems.querySelector('input');
        if (inputElement && pattern.test(inputElement.value.trim())) {
            BookACall.classList.toggle('hidden');
            BookACall.classList.toggle('BookACall');
        }
    });

    const BookACall__back = document.querySelector('.BookACall__back');

    BookACall__back.addEventListener('click', function() {
        BookACall.classList.toggle('hidden');
        BookACall.classList.toggle('BookACall');
    });

    const Bringing__containerOneButton = document.querySelector('.Bringing__containerOne-button');
    const Pricing__containerOneWrapperInnerBtnOneAll = document.querySelectorAll('.Pricing__containerOne-wrapper-inner-btnOne');

    function hidden() {
        BookACall.classList.toggle('hidden');
        BookACall.classList.toggle('BookACall');

    };

    Bringing__containerOneButton.addEventListener('click', function() {
        hidden();
    });

    for (const iterator of Pricing__containerOneWrapperInnerBtnOneAll) {
        iterator.addEventListener('click', function() {
            hidden();
        });
    };

    const Pricing__containerOneWrapperInnerBtnTwo = document.querySelectorAll('.Pricing__containerOne-wrapper-inner-btnTwo');


    for (const iterator of Pricing__containerOneWrapperInnerBtnTwo) {
        iterator.addEventListener('click', function() {
            let price = iterator.parentElement.querySelector('.Pricing__containerOne-wrapper-inner-price').textContent;
            let rate = iterator.parentElement.querySelector('.Pricing__containerOne-wrapper-inner-row-text').textContent
            BookACall__wrapperItems.querySelector('textarea').value = `I want to buy ${rate} for ${price}. `;
            hidden();
        });
    };
}
BookACallHidden();