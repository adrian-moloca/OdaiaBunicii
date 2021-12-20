import Client from '../../models/client.js';

const addPhotos = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    photos
  } = req.body;
  
  let existingClient;

  try {
    existingClient = await Client.findOne({clientID: userID});
    if(existingClient) {
        existingClient.photos = new Array();
        existingClient.photos = photos;
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
    message: 'Photos added',
    user: existingClient
  });
};

export default addPhotos;