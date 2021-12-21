import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    b64Image,
    frame,
    numberOfItems
  } = req.body;
  
  let existingClient;

  try {

    existingClient = await Client.findOne({clientID: userID});

    if(existingClient) {
        existingClient.editedPhotos.push({b64Image: b64Image, frame: frame, numberOfItems: numberOfItems})
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