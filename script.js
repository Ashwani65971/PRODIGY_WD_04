// js code for swiper js works
function worksSwiper()
{
    var swiper = new Swiper(".works-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:
        {
            800:
            {
                slidesPerView: 2,
            },
            300:
            {
                slidesPerView: 1,
            }
        }
      });
}

if(worksSwiper())
{
    worksSwiper();
}

// js code for toggle menu
let toggleMenu = document.querySelector('header i');
let sideNav = document.querySelector('.sideNav');
if(toggleMenu && sideNav)
{
    toggleMenu.addEventListener('click',()=>{
        toggleMenu.classList.toggle('active');
        sideNav.classList.toggle('active');
    })
}

// js code for maincover parallex effect

document.addEventListener('mousemove',parllexCover);
let parallexEffect = document.querySelectorAll('.parallexEffect');

function parllexCover(target)
{
    parallexEffect.forEach((targetLayer)=>{
        let getSpeed = targetLayer.getAttribute('data-speed');

        let xTarget = (window.innerWidth - target.pageX * getSpeed)/100;
        let yTarget = (window.innerHeight - target.pageY * getSpeed)/100;

        targetLayer.style.transform = `translate(${xTarget}px, ${yTarget}px) rotate(-10deg)`;
    })
}


// js code to create awesome image trail effect

let imagesBox = [
    'hover-imgs/hover-1.jpg',
    'hover-imgs/hover-2.jpg',
    'hover-imgs/hover-3.jpg',
    'hover-imgs/hover-4.jpg',
    'hover-imgs/hover-5.jpg',
    'hover-imgs/hover-6.jpg',
    'hover-imgs/hover-7.jpg',
    'hover-imgs/hover-8.jpg',
    'hover-imgs/hover-9.jpg',
    'hover-imgs/hover-10.avif',
];

let currentIndex = 0;

let imageContainer = document.querySelector('.awesome-effect-container');
let imagesStoreContainer = document.querySelector('.images-container');

imageContainer.addEventListener('mousemove',(e)=>{
    let xValue = e.clientX;
    let yValue = e.clientY;
    coolHover(xValue, yValue);
})

function coolHover(fetchX, fetchY)
{
    // let randomImageSelect = imagesBox[Math.floor(Math.random() * imagesBox.length)];
    let randomImageSelect = imagesBox[currentIndex];
    let createImage = document.createElement('img');
    createImage.src = randomImageSelect;
    createImage.setAttribute('class','awesomeHover');
    createImage.style.left = fetchX + 'px';
    createImage.style.top = fetchY + 'px';
    imagesStoreContainer.appendChild(createImage);
    currentIndex = (currentIndex + 1) % imagesBox.length;

    setTimeout(()=>{
        createImage.style.opacity = 1;
    },10);

    setTimeout(()=>{
      createImage.style.opacity = 0;
        setTimeout(()=>{
            imagesStoreContainer.removeChild(createImage);
        },200);

    },500)
}

// js code for move the cute eyes
let cuteEyes = document.querySelectorAll('.awesome-eyes-container .eyes');
let eyesContainer = document.querySelector('.awesome-eyes');

eyesContainer.addEventListener('mousemove',()=>{
    movingEyes();
})

function movingEyes()
{
    cuteEyes.forEach((targeteyes)=>{
        let getXvalue = targeteyes.getBoundingClientRect().left + targeteyes.clientWidth / 2
        let getYvalue = targeteyes.getBoundingClientRect().top + targeteyes.clientHeight / 2

        let getRadian = Math.atan2(event.pageX - getXvalue, event.pageY - getYvalue)
        let rotateEyes = getRadian * (-560 / Math.PI) * -1

        targeteyes.style.transform = `rotate(${rotateEyes}deg)`
    })
}

// js code for tilt hover effect for skills
$('.my-skills-card').tilt({
    glare: true,
    maxGlare: .5,
    scale: 1.15,
})


// js code for click popup image effect
    
let specialContainerBox = document.querySelector('.special-hover-effect');
let specialHoverImageBox = document.querySelector('.special-hover-effect-insides');
let imagesBoxArray = [
    "special-hovers/gif-1.gif",
    "special-hovers/gif-2.gif",
    "special-hovers/gif-3.gif",
    "special-hovers/gif-4.gif",
    "special-hovers/gif-5.gif",
    "special-hovers/gif-6.gif",
    "special-hovers/gif-7.gif",
    "special-hovers/gif-8.gif",
    "special-hovers/gif-9.gif",
    "special-hovers/gif-10.gif",
];

let currentIndexarray = 0; // Keep track of the current index of the image to be displayed

specialContainerBox.addEventListener('click', (trgt) => {
    let getX = trgt.clientX;
    let getY = trgt.clientY; // Corrected a typo: clienY should be clientY
    createImageFunction(getX, getY);
});

function createImageFunction(getValueX, getValueY) {
    let getArrayImage = imagesBoxArray[currentIndexarray];
    let createImageSrc = document.createElement('img');
    createImageSrc.src = getArrayImage;
    createImageSrc.setAttribute('class', 'dynamicIMG');
    createImageSrc.style.left = getValueX + 'px';
    createImageSrc.style.top = getValueY + 'px';
    specialHoverImageBox.appendChild(createImageSrc);
    currentIndexarray = (currentIndexarray + 1) % imagesBoxArray.length;

    setTimeout(() => {
        createImageSrc.style.opacity = 0;
    }, 2000);

    createImageSrc.addEventListener('transitionend', () => {
        specialHoverImageBox.removeChild(createImageSrc); // Remove the image once transition is complete
    });
}


// js code for cursor

let cursorPointer = document.querySelector('.cursor');
window.addEventListener('mousemove',(e)=>{
    let cursorX = e.pageX;
    let cursorY = e.pageY;
    moveCursor(cursorX, cursorY);
})

function moveCursor(xval, yval)
{
    cursorPointer.style.left = xval + 'px';
    cursorPointer.style.top = yval + 'px';
}

document.querySelectorAll('h1, p, small, a, img').forEach((targetcursor)=>{
    targetcursor.addEventListener('mousemove',()=>{
        cursorPointer.style.transform = `translate(-50%, -50%) scale(5)`;
        cursorPointer.style.backgroundColor = "limegreen";

    })
    targetcursor.addEventListener('mouseleave',()=>{
        cursorPointer.style.transform = `translate(-50%, -50%) scale(1)`;
        cursorPointer.style.backgroundColor = "transparent";
    })
})

let specialEffectBox = document.querySelector('.special-hover-effect');
let cursorTwo = document.querySelector('.cursorTwo');
window.addEventListener('mousemove',(e)=>{
    let cursorTwoX = e.pageX;
    let cursorTwoY = e.pageY;

    cursorTwo.style.left = cursorTwoX + 'px';
    cursorTwo.style.top = cursorTwoY + 'px';
})

specialEffectBox.addEventListener('mousemove',(e)=>{
    cursorPointer.style.transform = `translate(-50%, -50%) scale(0)`;
    cursorTwo.style.transform = `translate(-50%, -50%) scale(1)`;
})
specialEffectBox.addEventListener('mouseleave',()=>{
    cursorPointer.style.transform = `translate(-50%, -50%) scale(1)`;
    cursorTwo.style.transform = `translate(-50%, -50%) scale(0)`;
})

imageContainer.addEventListener('mousemove',()=>{
    cursorPointer.style.transform = `translate(-50%, -50%) scale(0)`;
})
imageContainer.addEventListener('mouseleave',()=>{
    cursorPointer.style.transform = `translate(-50%, -50%) scale(1)`;
})
