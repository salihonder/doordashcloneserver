// Import the express library here
const express = require("express");
// Instantiate the app here
const app = express();

const data = [
    {
        image: 'restaurant.png',
        title: `McDonald’s`,
        distance: 1.1,
        duration: 20,
        rate: 4.5,
        totalRateNumber: 9700,
        minTotalFees: 0,
        priceCategory: '$',
        tags: 'American, Burgers'
    },
    {
        image: 'restaurant.png',
        title: `Jack in the Box`,
        distance: 2.7,
        duration: 35,
        rate: 4.4,
        totalRateNumber: 2400,
        minTotalFees: 3.99,
        priceCategory: '$$',
        tags: 'American, Burgers'
    },
    {
        image: 'restaurant.png',
        title: `Mei'Mei's Kitchen`,
        distance: 4.4,
        duration: 40,
        rate: 4.5,
        totalRateNumber: 960,
        minTotalFees: 5.99,
        priceCategory: '$$',
        tags: 'Korean, BBQ'
    },
    {
        image: 'restaurant.png',
        title: `Bamboo Bistro`,
        distance: 4.4,
        duration: 35,
        rate: 4.6,
        totalRateNumber: 7900,
        minTotalFees: 5.99,
        priceCategory: '$$$$',
        tags: 'Thai'
    },

];

app.get("/restaurants", (req, res) => {
    const response = {
        restaurants: data
    };

    res.send(response);
});

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});

