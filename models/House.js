import mongoose from 'mongoose';
const schema = mongoose.Schema;

let House = new schema({
    "name": {type: String},
});

export default mongoose.model("houses", House);