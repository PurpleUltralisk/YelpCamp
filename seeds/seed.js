const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/YelpCamp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()*30)+10;
        const camp = new Campground({
            author:'608ace4b41ea114bb3601526',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type:"Point",
                coordinates:[cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                    url:'https://source.unsplash.com/640x490/?forest,nature,landscapes',
                    filename: 'unsplash'
                }
            ], 
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae asperiores suscipit cumque porro dolore dignissimos et necessitatibus qui repudiandae neque at, odit amet cum veritatis quis rerum quos illum.',
            price 
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})