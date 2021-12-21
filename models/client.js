import pkg from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import frameSchema from './frame.js';

const { Schema, model } = pkg;

const ClientSchema = new Schema({
        clientID: {type: String},
        sessionPhotos: [{b64Image: {type: String, default: ''}, fileName: {type: String, default: ''}, height: {type: Number, default: 0}, width: {type: Number, default: 0}, uri: {type: String, default: ''}, isSelected: {type: Boolean, default: false}}],
        editedPhotos: [{b64Image : {type: String, default: ''}, frame: {type: frameSchema}, numberOfItems: {type: Number, default: 1}}],
        QRcodeString: {type: String, default: ''},
});

ClientSchema.plugin(uniqueValidator);

export default model('Client', ClientSchema);