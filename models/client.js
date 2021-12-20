import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import Frame from './frame'

const { Schema, model } = pkg;

const clientSchema = new Schema({
        clientID: {type: String, required: true},
        photos: [{photo: {type: String}, isSelected: {type: Boolean, default: false}}],
        photosEdited: [{base64Image : {type: String}, frame: {type: Frame}, numberOfTimes: {type: Number}}],
        QRcodeString: {type: String},
        isAdmin: {type: Boolean, default: false},
});

clientSchema.plugin(uniqueValidator);

export default model('Client', clientSchema);