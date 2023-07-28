const cities = [
    {
        name: 'Athene',
        id: 'Athene',
        category: 'Ancient',
        img: './img/Athene.jpeg',
    },
    {
        name: 'Brugges',
        id: 'Brugges',
        category: 'Medieval',
        img: './img/Brugges.jpeg',
    },
    {
        name: 'Dubrovnik',
        id: 'Dubrovnik',
        category: 'Medieval',
        img: './img/Dubrovnik.jpeg',
    },
    {
        name: 'Frankfurt',
        id: 'Frankfurt',
        category: 'Modern',
        img: './img/Frankfurt.jpg',
    },
    {
        name: 'Gisa',
        id: 'Gisa',
        category: 'Ancient',
        img: './img/Gisa.jpeg',
    },
    {
        name: 'London',
        id: 'London',
        category: 'Modern',
        img: './img/London.jpg',
    },
    {
        name: 'Petra',
        id: 'Petra',
        category: 'Ancient',
        img: './img/Petra.jpg',
    },
    {
        name: 'Pompei',
        id: 'Pompei',
        category: 'Ancient',
        img: './img/Pompei.jpg',
    },
    {
        name: 'Prague',
        id: 'Prague',
        category: 'Medieval',
        img: './img/Prague.jpg',
    },
    {
        name: 'Rome',
        id: 'Rome',
        category: 'Ancient',
        img: './img/Rome.jpeg',
    },
    {
        name: 'Siena',
        id: 'Siena',
        category: 'Medieval',
        img: './img/Siena.jpeg',
    },
    {
        name: 'Warsaw',
        id: 'Warsaw',
        category: 'Modern',
        img: './img/Warsaw.jpg',
    },
];
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
    preloader.classList.remove('preloader');
    displayCities(cities);
});

const all = document.querySelector('#All');
const Ancient = document.querySelector('#Ancient');
const Medieval = document.querySelector('#Medieval');
const Modern = document.querySelector('#Modern');

const elementmaking = document.querySelector('.Cities')

//Modal making
const images = document.querySelectorAll('.Cities li');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

function displayCities(city){
    let Info = city.map(function(item){
        return `<li  id=${item.id} class ='col-sm-4 col-md-3 col-lg-4 col-xl-2 citycontainer'>
        <img class="img-thumbnail" src=${item.img}>
            <h2 class="img-title">
                ${item.name}
            </h2>
        </li>`
    });
    Info = Info.join('');
    elementmaking.innerHTML = Info;

    const updatedImages = document.querySelectorAll('.Cities li');

    // Add event listeners to the newly created list items
    updatedImages.forEach(item => {
        item.addEventListener('click', function () {
            modal.style.display = 'block';
            if(item.id == 'Athene'){
                modalImg.src = './img/Athene.jpeg';
                captionText.innerHTML = 'Athene';
            } else if (item.id == 'Brugges'){
                modalImg.src = './img/Brugges.jpeg';
                captionText.innerHTML = 'Brugges';
            } else if (item.id == 'Dubrovnik'){
                modalImg.src = './img/Dubrovnik.jpeg';
                captionText.innerHTML = 'Dubrovnik';
            } else if (item.id == 'Frankfurt'){
                modalImg.src = './img/Frankfurt.jpg';
                captionText.innerHTML = 'Frankfurt';
            } else if (item.id == 'Gisa'){
                modalImg.src = './img/Gisa.jpeg';
                captionText.innerHTML = 'Gisa';
            } else if (item.id == 'London'){
                modalImg.src = './img/London.jpg';
                captionText.innerHTML = 'London';
            } else if (item.id == 'Petra'){
                modalImg.src = './img/Petra.jpg';
                captionText.innerHTML = 'Petra';
            } else if (item.id == 'Pompei'){
                modalImg.src = './img/Pompei.jpg';
                captionText.innerHTML = 'Pompei';
            } else if (item.id == 'Prague'){
                modalImg.src = './img/Prague.jpg';
                captionText.innerHTML = 'Prague';
            } else if (item.id == 'Rome'){
                modalImg.src = './img/Rome.jpeg';
                captionText.innerHTML = 'Rome';
            } else if (item.id == 'Siena'){
                modalImg.src = './img/Siena.jpeg';
                captionText.innerHTML = 'Siena';
            } else if (item.id == 'Warsaw'){
                modalImg.src = './img/Warsaw.jpg';
                captionText.innerHTML = 'Warsaw';
            }
        });
    });
}

all.addEventListener('click', function(){
    displayCities(cities);
});

Ancient.addEventListener('click', function(){
    const AncientCities = cities.filter(function(city){
        return city.category === 'Ancient';
    });
    displayCities(AncientCities);
});

Medieval.addEventListener('click', function(){
    const MedievalCities = cities.filter(function(city){
        return city.category === 'Medieval';
    });
    displayCities(MedievalCities);
})

Modern.addEventListener('click', function(){
    const ModernCities = cities.filter(function(city){
        return city.category === 'Modern';
    });
    displayCities(ModernCities)
});
