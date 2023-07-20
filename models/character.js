import mongoose from 'mongoose';
const schema = mongoose.Schema;

let Character = new schema({
    "_id": {type: String},
    "name": {type: String},
    "house": {type: String},
});

export default mongoose.model("characters", Character);