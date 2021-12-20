import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema, model } = pkg;

const frameSchema = new Schema({
        label: {type: String, required: true},
        source: {type: String, required: true},
        type: {type: String, required: true},
        dim: {type: String, required: true},
        price: {type: String, required: true},
});

frameSchema.plugin(uniqueValidator);

export default model('Frame', frameSchema);