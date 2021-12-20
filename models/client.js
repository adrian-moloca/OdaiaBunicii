import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import frameSchema from './frame.js';

const { Schema, model } = pkg;

const ClientSchema = new Schema({
        clientID: {type: String, required: true},
        likedPhotos: [{base64Image: {type: String}, fileName: {type: String}, height: {type: Number}, width: {type: Number}, uri: {type: String}, isSelected: {type: Boolean, default: false}}],
        photosEdited: [{base64Image : {type: String}, frame: {type: frameSchema}, numberOfTimes: {type: Number}}],
        QRcodeString: {type: String},
        isAdmin: {type: Boolean, default: false},
        order: [{base64Image : {type: String}, frame: {type: frameSchema}, numberOfTimes: {type: Number}}],
});

ClientSchema.plugin(uniqueValidator);

export default model('Client', ClientSchema);