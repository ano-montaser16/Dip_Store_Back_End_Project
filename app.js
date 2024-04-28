
const express = require('express');


// Define routes for products

// module.exports = router;

const app = express();



const userRouter = require('./routes/userroutes');
const productRouter = require('./routes/productroutes')
const favouritRouter = require('./routes/favouritesroutes')

app.use(express.json())

app.use('/api/Dip_Store/user_register_collections', userRouter);
app.use('/api/Dip_Store/products', productRouter);
app.use('/api/Dip_Store/favourites', favouritRouter) ;




module.exports = app;