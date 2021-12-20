import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema, model } = pkg;

const clientSchema = new Schema({
        clientID: {type: String},
        photos: [{photo: {type: String}, isSelected: {type: Boolean, default: false}}],
        photosEdited: [{photo: {type: String}, isSelected: {type: Boolean, default: false}}],
        QRcodeString: {type: String},
        isAdmin: {type: Boolean, default: false},
});

clientSchema.plugin(uniqueValidator);

export default model('Client', clientSchema);