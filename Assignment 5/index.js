const form = document.getElementById('search-form');
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');
        const closeButton = document.getElementById('closeButton');

        // Your car data
        const carBrands = [
            "Toyota",
            "Honda",
            "Mazda",
            "BMW",
            "Mercedes Benz",
            "Subaru",
            "Lamborghini",
            "Ford",
            "Chevrolet",
            "Audi",
            "Volkswagen",
            "Nissan",
            "Kia",
            "Hyundai",
            "Porsche",
            "Ferrari",
            "Jaguar",
            "Land Rover",
            "Volvo",
            "Tesla",
            "Lexus",
            "Acura",
            "Infiniti",
            "Chrysler",
            "Dodge",
            "Jeep",
            "Ram",
            "Buick",
            "Cadillac",
            "GMC",
            "Mini",
            "Alfa Romeo",
            "Aston Martin",
            "Bugatti",
            "Maserati",
            "McLaren",
            "Rolls-Royce",
            "Suzuki",
            "Fiat",
            "Mitsubishi",
            "Smart",
            "Maybach",
            "Pagani",
            "Genesis",
            "Lincoln"
          ];
          
          
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const searchTerm = searchInput.value.trim();
            const matchingCars = carBrands.filter(car => car.toLowerCase().includes(searchTerm.toLowerCase()));

            if (matchingCars.length > 0) {
                const results = matchingCars.join(', ');
                popupContent.textContent = `Matching cars: ${results}`;
                popup.style.display = 'block';
            } else {
                popupContent.textContent = 'No matching cars found.';
                popup.style.display = 'block';
            }
        });

        closeButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });