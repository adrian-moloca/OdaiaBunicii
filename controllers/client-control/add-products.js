import Client from '../../models/client.js';

const addProducts = async (req, res, next) => {
  const userID = req.params.uid;
  const {
    base64,
    label,
    source,
    type,
    dim,
    price,
    numberOfItems
  } = req.body;

  let newItem = [{base64: base64, label: label, source: source, type: type, dim: dim, price: price, numberOfItems: numberOfItems}];

  let existingClient;

  try {
    existingClient = await Client.findOne({clientID: userID});
    if(existingClient) {
      existingClient.editedPhotos = [...newItem];
    }

    await existingClient.save();
    
  } catch (error) {
      return res.status(500).json({
        error
      });
  };

  res.status(200).json({
    message: 'Product added',
    client: existingClient.editedPhotos,
  });

};

export default addProducts;