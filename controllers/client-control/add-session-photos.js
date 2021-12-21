import Client from '../../models/client.js';

const addSessionPhotos = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    sessionPhotos
  } = req.body;
  
  try {
  console.log(sessionPhotos)
     let existingClient = await Client.updateOne({clientID: userID}, {$set: {sessionPhotos: [...sessionPhotos]}});
   res.status(200).json({
      message: 'Photos added',
      user: existingClient,
      sessionPhotos: sessionPhotos,
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  };
};

export default addSessionPhotos;