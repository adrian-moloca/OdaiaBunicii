import Client from '../../models/client.js';
import widgets from 'qrcode';
import pkg from 'unique-names-generator';

const { uniqueNamesGenerator, adjectives, colors, animals } = pkg;

const { toString, toDataURL } = widgets;


const generateQR = async (req, res, next) => {


const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

const dynamicData = randomName + Date.now();

// Converting the data into String format
let stringdata = JSON.stringify(dynamicData)

// Print the QR code to terminal
let clientID = toString(stringdata,{type:'utf-8'}, // terminal, svg, utf-8, png
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
    return QRcode;
});

// Converting the data into base64
toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	// console.log(code)
    return code;
})

let generateQRCode;

try {

    generateQRCode = new Client({
        clientID: JSON.stringify(clientID),
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
