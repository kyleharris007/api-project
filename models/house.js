import mongoose from 'mongoose';
const schema = mongoose.Schema;

let Character = new schema({
    "_id": {type: String},
    "name": {type: String},
    "role": {type: String},
    "house": {type: String},
    "school": {type: String},
    "ministryOfMagic": {type: Boolean},
    "orderOfThePhoenix": {type: Boolean},
    "dumbledoresArmy": {type: Boolean},
    "deathEater": {type: Boolean},
    "bloodStatus": {type: String},
    "species": {type: String}
});

export default mongoose.model("characters", Character);