// 1. DATABASE (The editable part)
const cars = [
     {
        id: 10,
        name: "BYD Seal 05",
        type: "Classy",
        price: 125,
        image: "images/seal05.png"
    },
    {
        id: 1,
        name: "Kia Cerato",
        type: "Sedan",
        price: 70,
        image: "images/kia.png" 
    },
    {
        id: 2,
        name: "Honda Accord Hybrid",
        type: "Hybrid Sedan",
        price: 50,
        image: "images/honda.png"
    },
    {
        id: 3,
        name: "Peugeot Pars",
        type: "Economy",
        price: 35,
        image: "images/pars.png"
    },
    {
        id: 4,
        name: "NISSAN SUNNY",
        type: "Economy",
        price: 45,
        image: "images/sunny.png"
    },
    {
        id: 5,
        name: "Hyundai Accent",
        type: "Economy",
        price: 60,
        image: "images/accent.png"
    },
    {
        id: 6,
        name: "Land Rover Defender",
        type: "Economy",
        price: 125,
        image: "images/defender.png"
    },
    {
        id: 7,
        name: "HUYNDIA ELANTRA",
        type: "Economy",
        price: 50,
        image: "images/elantra.png"
    },
    {
        id: 8,
        name: "HYUNDAI TUCSON",
        type: "SUV",
        price: 80
        ,
        image: "images/tucsun.png"
    },
    {
        id: 9,
        name: "CHEVROLET TAHOE",
        type: "Classy",
        price: 335,
        image: "images/tahoe.png"
        
    }
    
];


const carContainer = document.getElementById('car-container');

function displayCars() {
    carContainer.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <div class="card-info">
                <h3>${car.name}</h3>
                <p>${car.type}</p>
                <p class="price">$${car.price} <span>/ day</span></p>
                <button class="btn-book" onclick="openBooking(${car.id})">Select Car</button>
            </div>
        </div>
    `).join('');
}


const modal = document.getElementById('booking-modal');
const modalDetails = document.getElementById('modal-details');


function openBooking(id) {

    const selectedCar = cars.find(c => c.id === id);
    
    
    localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
    
    
    window.location.href = "booking.html";
}


document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

function confirm() {
    alert("Booking successful! We will contact you shortly.");
    modal.style.display = "none";
}


displayCars();