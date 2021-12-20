import Client from '../../models/client.js';

const newOrder = async (req, res, next) => {

try {
    generateQRCode = new Client({
        clientID: dynamicData,
        photos: [],
        photosEdited: [],
        QRcodeString: toString(stringdata,{type:'terminal'},(QRcode) => QRcode),
        isAdmin: false,
    })

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

export default newOrder;
