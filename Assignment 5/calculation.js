//Define your car_brands and car_tire_brands arrays here
const express = require('express');
const fs = require('fs');

const app = express();
const car_brands = ["Toyota", "Honda", "Mazda", "BMW", "Mercedes Benz", "Subaru", "Lamborghini"];
const car_tire_brands = ["Michelin", "Bridgestone", "Goodyear", "Continental", "Pirelli", "Dunlop", "Yokohama", "Hankook", "Firestone", "Toyo Tires", "Cooper Tires", "Falken Tires", "Kumho Tires", "BFGoodrich", "Nitto Tires", "General Tire", "Sumitomo Tires", "Nokian Tyres", "BF Falcon", "Uniroyal"];

//Define your functions for filtering car brands and tire brands
function carFilter(letter, carBrands) {
    const filteredBrands = carBrands.filter(brand => brand.toUpperCase().startsWith(letter.toUpperCase()));
    return filteredBrands;
}

function carTireFilter(letter, carTireBrands) {
    const filteredTires = carTireBrands.filter(tire => tire.toUpperCase().startsWith(letter.toUpperCase()));
    return filteredTires;
}

app.get('/api/data.csv', (req, res) => {
    const letter = req.query.letter;
    const filteredBrands = carFilter(letter, car_brands);
    const filteredTires = carTireFilter(letter, car_tire_brands);

    let content = `Brands starting with letter '${letter}': ${filteredBrands.join(', ')}\n`;
    content += `Tires starting with letter '${letter}': ${filteredTires.join(', ')}`;

    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
    res.set('Content-Type', 'text/plain');
    res.send(content);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});