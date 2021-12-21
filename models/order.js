import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import frameSchema from './frame.js';

const { Schema, model } = pkg;

const orderSchema = new Schema({
    clientID: {type: String},
    myOrder: [{b64Image: {type: String}, frame: {type: frameSchema}, numberOfItems: {type: Number, default: 1}}],
    contactDetails: {type: String},
});
orderSchema.plugin(uniqueValidator);

export default model('Order', orderSchema);