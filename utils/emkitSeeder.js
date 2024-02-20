const EmKit = require('../models/emKit');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const emkits = require('../data/emKits');

//Setting dotenv file
dotenv.config({ path: 'config/config.env'});

connectDatabase();

const seedEmkits = async () => {
    try {

        await EmKit.deleteMany();
        console.log('All Emergency Items Deleted');

        await EmKit.insertMany(emkits);
        console.log('All Emergency Items Created');

        process.exit();

    } catch (error){
        console.log(error.message);
        process.exit();
    }
}


seedEmkits();