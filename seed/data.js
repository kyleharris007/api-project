import db from '../db/connection.js';
import House from '../models/House.js';
import Character from '../models/Character.js';
import houses from './houses.js' assert { type: "json" };
import characters from './characters.js' assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase();
    await characters.create(characters);
    await House.create(houses);
    await db.close();
};

insertData();