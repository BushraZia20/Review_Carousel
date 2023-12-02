const carouselData = [
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=1',
        theName: '1',
        theProfession: '1',
        theReview: 'A for Apple' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=2',
        theName: '2',
        theProfession: '2',
        theReview: 'B for Ball' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=3',
        theName: '3',
        theProfession: '3',
        theReview: 'C for Cap' 
    },   
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=4',
        theName: '4',
        theProfession: '4',
        theReview: 'D for Dog' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=5',
        theName: '5',
        theProfession: '5',
        theReview: 'E for Egg' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=6',
        theName: '6',
        theProfession: '6',
        theReview: 'F for Fish' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=7',
        theName: '7',
        theProfession: '7',
        theReview: 'G for Goat' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=8',
        theName: '8',
        theProfession: '8',
        theReview: 'H for Hen' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=9',
        theName: '9',
        theProfession: '9',
        theReview: 'I for Icecream' 
    },
    {
        theImage: 'https://source.unsplash.com/random/200x200?sig=10',
        theName: '10',
        theProfession: '10',
        theReview: 'J for Jug' 
    }
]

const imageElement = document.getElementById('img_Element')
const nameElement = document.getElementById('nameElement')
const professionElement = document.getElementById('professionElement')
const reviewElement = document.getElementById('reviewElement')

const leftBtn = document.getElementById('leftBtn')
const rightBtn = document.getElementById('rightBtn')
const surpriseMeBtn = document.getElementById('surpriseMe')


function updateCarouselElements(index){
    
    //array elements are accesed as objects through "index" and manipulated by creating variables for updating the carousel elements 

    const carouselElementsUpdate = carouselData[index]
    imageElement.src = carouselElementsUpdate.theImage;
    nameElement.textContent = carouselElementsUpdate.theName;
    professionElement.textContent = carouselElementsUpdate.theProfession;
    reviewElement.textContent = carouselElementsUpdate.theReview;
}

let presentIndex = 0;
updateCarouselElements(presentIndex)

function upcomingCarousel(){
    presentIndex = (presentIndex + 1) % carouselData.length
    updateCarouselElements(presentIndex)
}

function prevCarousel(){
    presentIndex = (presentIndex - 1 + carouselData.length) % carouselData.length
    updateCarouselElements(presentIndex)
}

function surpriseMeCarousel(){
    presentIndex = (Math.floor(Math.random()*carouselData.length))
    updateCarouselElements(presentIndex)
}

rightBtn.addEventListener('click', upcomingCarousel);
leftBtn.addEventListener('click', prevCarousel);
surpriseMeBtn.addEventListener('click', surpriseMeCarousel)
