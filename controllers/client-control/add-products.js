import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    photosEdited
  } = req.body;
  
  let existingClient;

  try {

    existingClient = await Client.findOne({clientID: userID});
    if(existingClient) {
        existingClient.photosEdited = new Array();
        existingClient.photosEdited = photosEdited;
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
    message: 'Products added',
    user: existingClient
  });
};

export default addProducts;