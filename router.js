// (waiters)
const express = require('express')
const app = express();
const router = express.Router();
const controllers = require(__dirname + "/controllers/controllers");


router.get('/', controllers.hello);	

router.get('/beerlist', controllers.beerList);								//they visit our page

// router.get('/beerlist', controllers.beerList);

// router.get('/')

module.exports = router;

