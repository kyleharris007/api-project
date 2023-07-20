import mongoose from 'mongoose';
const schema = mongoose.Schema;

let House = new schema({
    "_id": {type: String},
    "name": {type: String},
});

export default mongoose.model("houses", House);