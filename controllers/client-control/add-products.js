import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    base64Image,
    frame,
    numberOfTimes
  } = req.body;
  
  let existingClient;

  try {

    existingClient = await Client.findOne({clientID: userID});
    if(existingClient) {
        existingClient.photosEdited.push({base64Image: base64Image, frame: frame, numberOfTimes: numberOfTimes})
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
    photosEdited: existingClient.photosEdited,
  });
};

export default addProducts;