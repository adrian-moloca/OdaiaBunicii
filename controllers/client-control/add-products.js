import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    base64,
    frame,
    numberOfItems
  } = req.body;

  try {

    // let existingClient = await Client.updateOne({clientID: userID}, {$push: {editedPhotos: [{base64: base64, frame: frame, numberOfItems: numberOfItems}]}});
    let existingClient = await Client.findOne({cliendID: userID});
    existingClient.update({$push: {editedPhotos: {base64: base64, frame: frame, numberOfItems: numberOfItems}}})

    console.log(existingClient);

    res.status(200).json({
      message: 'Product added',
      editedPhotos: existingClient.editedPhotos,
    });

  } catch (error) {
    return res.status(500).json({
      error
    });
  };
};

export default addProducts;