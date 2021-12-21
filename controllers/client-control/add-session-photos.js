import Client from '../../models/client.js';

const addSessionPhotos = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    sessionPhotos
  } = req.body;
  
  let existingClient;

  try {
    existingClient = await Client.findOne({clientID: userID});
    if(existingClient) {
        existingClient.sessionPhotos.concat(sessionPhotos);
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
    sessionPhotos: existingClient.sessionPhotos
  });
};

export default addSessionPhotos;