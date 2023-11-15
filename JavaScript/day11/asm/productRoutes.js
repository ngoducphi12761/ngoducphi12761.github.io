let express = require('express');

const options = {
    "caseSensitive" : true,
    "strict" : true
}
let productRoute = express.Router(options);

productRoute.get('/', (req, res, next)=>{
    res.send('Product Home page')
})

productRoute.get('/checkout', (req, res, next)=>{

    res.send('Product Checkout pageeeeeeeee')
})

module.exports = productRoute;