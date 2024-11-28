const houses = [
  {
    id: 1,
    name: "Muhima Apartment",
    address: "Muhima near Adventist Church",
    bedrooms: 2,
    bathrooms: 1,
    price: 10000000,
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Gashuriro Apartment",
    address: "near to Gacuriro Sector",
    bedrooms: 2,
    bathrooms: 1,
    price: 10000000,
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Akeza House",
    address: "KN 22 St",
    bedrooms: 4,
    bathrooms: 3,
    price: 50000000,
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const productList = document.getElementById("house-list");
const form = document.getElementById("house-form");

function renderHouses() {
  productList.innerHTML = "";
  houses.forEach((house) => {
    const card = document.createElement("div");
    card.className = "house-card";
    card.innerHTML = `
            <img src="${house.image}" alt="${house.name}" />
            <h3>${house.name}</h3>
            <p>Address: ${house.address}</p>
            <p>Bedrooms: ${house.bedrooms}</p>
            <p>Bathrooms: ${house.bathrooms}</p>
            <p>Price: ${house.price} Rwf</p>
          `;
    productList.appendChild(card);
  });
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newHouse = {
    id: houses.length + 1,
    name: document.getElementById("houseName").value,
    address: document.getElementById("address").value,
    bedrooms: parseInt(document.getElementById("bedrooms").value),
    bathrooms: parseInt(document.getElementById("bathrooms").value),
    price: parseFloat(document.getElementById("price").value),
    image: document.getElementById("image").value,
  };
  houses.push(newHouse);
  renderHouses();
  form.reset();
  alert("New house added successfully!");
});
renderHouses();
