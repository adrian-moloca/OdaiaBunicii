import pkg from 'express-validator';
import Client from '../../models/client.js';
import widgets from 'qrcode';

const { toString, toDataURL } = widgets;

const { validationResult} = pkg;

const generateQR = async (req, res, next) => {

const errors = validationResult(req);

if (!errors.isEmpty()) {
    return res.json({
    message: 'Invalid input.'
    });
}

const {
    name,
    dynamicData,
} = req.body;

// Converting the data into String format
let stringdata = JSON.stringify({name, dynamicData})

// Print the QR code to terminal
const clientID = toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
    return QRcode;
})

// Converting the data into base64
toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	console.log(code)
})

let generateQRCode;

try {

    generateQRCode = new Client({
        clientID,
        photos: [],
        photosEdited: []
    })

    await generateQRCode.save();

} catch (err) {
    res.status(500).json("Registration has failed!")
}

res.status(201).json({
    message: 'New user added!',
    user: generateQRCode,
});
};

export default generateQR;
