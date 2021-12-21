import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    base64,
    frame,
    numberOfItems
  } = req.body;
  
  let existingClient;

  try {

    existingClient = await Client.findOne({clientID: userID});

    if(existingClient) {
        existingClient.editedPhotos.push({base64: base64, frame: frame, numberOfItems: numberOfItems})
    }

  } catch (error) {
    return res.status(500).json({
      error
    });
  };

  try {
    await existingClient.save();
  } catch (err) {
    return res.status(500).json(err)
  }

  res.status(200).json({
    message: 'Product added',
    editedPhotos: existingClient.editedPhotos,
  });
};

export default addProducts;