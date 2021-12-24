import Order from '../../models/order.js';

// const matritaMicaMagneti = {zona1: [], zona2: [], zona3:[], zona4: []};
// const matritaMareMagneti = {zona1: [], zona2: [], zona3:[], zona4: [], zona5: [], zona6: [], zona7: [], zona8:[]};

// const splitDim = (dim) => {
//     const arr = dim.split('x');
//     const width = arr[0];
//     const height = arr[1];
//     return {width, height};
// }

const getScaled = async (req, res, next) => {
    const page = req.params.page;

    let existingOrders;
    let filtered = [];
    let orders = [];
    try {
        existingOrders = await Order.find(function (err, res) {return res});
        existingOrders.map(item => {
                filtered.push(item.order)
        });
        filtered.map(item => {
            item.map(child => {
                orders.push(child);
            })
        })
        orders.filter(item => item.isPrinted == true)
        // console.log(orders);

    } catch (err) {
        return err
    }
    res.json(orders)
}

export default getScaled;