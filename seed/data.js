import db from "../db/connection.js";
import House from "../models/House.js";
import Character from "../models/Character.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Character.create(characters);
  await House.create(houses);

  console.log("Characters and Houses created!");

  await db.close();
};

insertData();