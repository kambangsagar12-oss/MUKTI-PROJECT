const cars = [
  {
    id: 1,
    name: "BMW X5",
    type: "suv",
    price: 120,
    year: "2024",
    engine: "3.0L Turbo",
    seats: "5",
    fuel: "Petrol",
    speed: "155 mph",
    src: "images/BMW X5.jpg"
  },
  {
    id: 2,
    name: "Audi A4",
    type: "sedan",
    price: 90,
    year: "2023",
    engine: "2.0L Turbo",
    seats: "5",
    fuel: "Petrol",
    speed: "130 mph",
    src: "images/Audi A4.jpg"
  },
  {
    id: 3,
    name: "Jeep Wrangler",
    type: "off-road",
    price: 140,
    year: "2024",
    engine: "3.6L V6",
    seats: "5",
    fuel: "Diesel",
    speed: "112 mph",
    src: "images/jeep wrangler.jpg"
  },
  {
    id: 4,
    name: "Porsche 911",
    type: "sports",
    price: 150,
    year: "2024",
    engine: "3.0L Twin Turbo",
    seats: "2",
    fuel: "Petrol",
    speed: "182 mph",
    src: "images/Porsche 911.avif"
  },
  {
    id: 5,
    name: "Tesla Model 3",
    type: "ev",
    price: 70,
    year: "2024",
    engine: "Electric",
    seats: "5",
    fuel: "Battery",
    speed: "140 mph",
    src: "images/tesla model 3.jpg"
  },
  {
    id: 6,
    name: "Aston Martini Vintage ",
    type: "sports",
    price: 150,
    year: "1990",
    engine: "Twin Turbo V8",
    seats: "2",
    fuel: "Diesel",
    speed: "400 mph",
    src: "images/aston martini vintage.webp"
  },
  {
    id: 7,
    name: " Mazda MX5",
    type: "sports",
    price: 150,
    year: "1999",
    engine: "V6 Desiel Engine",
    seats: "2",
    fuel: "Diesel",
    speed: "350 mph",
    src: "images/mazda-mx5.jpg"
  },
  {
    id: 8,
    name: "Chevrolet Corvette C8 ",
    type: "sports",
    price: 150,
    year: "1990",
    engine: "V8 Mid Engine",
    seats: "2",
    fuel: "Diesel",
    speed: "380 mph",
    src: "images/corvette c8.jpg"
  },
  {
    id: 9,
    name: "BMW M3",
    type: "sports",
    price: 110,
    year: "2023",
    engine: "3.0L Twin turbo ",
    seats: "4",
    fuel: "Diesel",
    speed: "280 mph",
    src: "images/BMW m3.jpg"
  },
  {
    id: 10,
    name: "KIA EV6  ",
    type: "ev",
    price: 70,
    year: "2021",
    engine: "Motor Power 25KV",
    seats: "4",
    fuel: "lethium battery",
    speed: "240 Min Range",
    src: "images/kia EV6.jpg"
  },
  {
    id: 11,
    name: "Tesla model Y ",
    type: "ev",
    price: 80,
    year: "2021",
    engine: "Dual motor all wheel drive 35KV",
    seats: "4",
    fuel: "Lethium R",
    speed: "150 Min.Range",
    src: "images/Tesla model Y-.webp"
  },
  {
    id: 12,
    name: "Volvo EX30 ",
    type: "ev",
    price: 70,
    year: "2022",
    engine: "Compact EV all Wheel Drive",
    seats: "2",
    fuel: "Lithium battery",
    speed: "275 min. Range",
    src: "images/Volvo EX30.webp"
  },
  {
    id: 13,
    name: "Hyundai Ioniq-5 ",
    type: "ev",
    price: 50,
    year: "2022",
    engine: "Double Motor",
    seats: "6",
    fuel: "Murcury battery",
    speed: "130 mph",
    src: "images/Hyundai ioniq-5.png"
  },
  {
    id: 14,
    name: "Land Rover Defender ",
    type: "off-road",
    price: 120,
    year: "2020",
    engine: "Twin Turbo V6",
    seats: "7",
    fuel: "Diesel",
    speed: "150 mph",
    src: "images/land rover def.jpg"
  },
  {
    id: 15,
    name: "Ford Bronco ",
    type: "off-road",
    price: 150,
    year: "2021",
    engine: "Twin Turbo V6",
    seats: "6",
    fuel: "Diesel",
    speed: "130 mph",
    src: "images/ford Bronco.webp"
  },
  {
    id: 16,
    name: "Toyota 4Runner ",
    type: "off-road",
    price: 100,
    year: "2019",
    engine: "Twin Turbo V6 4WD",
    seats: "6",
    fuel: "Diesel",
    speed: "110 mph",
    src: "images/Toyota 4runner.avif"
  },
  {
    id: 17,
    name: "Toyota RAV4 ",
    type: "suv",
    price: 120,
    year: "2021",
    engine: "2.5L hybrid all wheel drive",
    seats: "6",
    fuel: "Diesel",
    speed: "130 mph",
    src: "images/Toyota RAV4.webp"
  },
  {
    id: 18,
    name: "Ford Explorer ",
    type: "suv",
    price: 150,
    year: "1990",
    engine: "2.3L Eco Boost All Wheel Drive",
    seats: "7",
    fuel: " Diesel",
    speed: "130 mph",
    src: "images/ford explorer.jpg"
  },
  {
    id: 19,
    name: "KIA Sorento ",
    type: "suv",
    price: 120,
    year: "2020",
    engine: "2.5L turbo all wheel drive",
    seats: "3 Row seat",
    fuel: "Diesel",
    speed: "130 mph",
    src: "images/kia sorento.jpg"
  },
  {
    id: 20,
    name: "BMW 3 Series ",
    type: "sedan",
    price: 120,
    year: "2020",
    engine: "2.4L turbo all wheel drive",
    seats: "4",
    fuel: "Diesel",
    speed: "130 mph",
    src: "images/BMW 3 series.webp"
  },
  {
    id: 21,
    name: "Toyota corolla ",
    type: "sedan",
    price: 110,
    year: "2020",
    engine: "2.0L front wheel drive",
    seats: "4",
    fuel: "Petrol",
    speed: "130 mph",
    src: "images/Toyota corolla.jpg"
  }

];

function showCars(list) {
  const carsContainer = document.getElementById("cars");
  let html = "";

  list.forEach(function(car) {
    html += `
      <div class="card">
        <img src="${car.src}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>£${car.price} / day</p>
        <button onclick="viewDetails(${car.id})">Details</button>
      </div>
    `;
  });

  carsContainer.innerHTML = html;
}

function viewDetails(id) {
  const selectedCar = cars.find(function(car) {
    return car.id === id;
  });

  localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  window.location.href = "detail.html";
}

document.addEventListener("DOMContentLoaded", function() {
  showCars(cars);

  const filter = document.getElementById("filter");

  filter.addEventListener("change", function() {
    const value = filter.value;

    if (value === "all") {
      showCars(cars);
    } else {
      const filteredCars = cars.filter(function(car) {
        return car.type === value;
      });
      showCars(filteredCars);
    }
  });
});



