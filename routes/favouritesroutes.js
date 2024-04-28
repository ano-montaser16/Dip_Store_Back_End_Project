const express = require('express');
const router = express.Router();
const Favourites = require('../controllers/favouritecontrollers');

router.route('/')
.post(Favourites.addFavourite)
.get(Favourites.getallFavourites);
router.route('/:favouriteID')
.delete(Favourites.deleteFav )
.get(Favourites.getSingleFavourite)

module.exports = router;



