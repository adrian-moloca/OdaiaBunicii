import Client from '../../models/client.js';
import widgets from 'qrcode';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const upperCaseName = uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals],
    style: 'upperCase',
});

const capitalizedName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    style: 'capital',
});

const { toString, toDataURL } = widgets;


const generateQR = async (req, res, next) => {

const dynamicData = Date.now();

// Converting the data into String format
let stringdata = JSON.stringify(dynamicData+upperCaseName+capitalizedName);

let generateQRCode;
let QRCode;

try {


    generateQRCode = new Client({
        clientID: dynamicData,
        photos: [],
        photosEdited: [],
        QRcodeString: toString(stringdata,{type:'terminal'},(QRcode) => QRcode),
        isAdmin: false,
    })

    toDataURL(stringdata,(err, QRcode) => QRCode = QRcode)

    await generateQRCode.save();

} catch (err) {
    res.status(500).json("Registration has failed!")
}

res.status(201).json({
    message: 'New user added!',
    user: generateQRCode,
    QRCode: QRCode,
});
};

export default generateQR;
