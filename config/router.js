// (waiters)
const express = require('express')
const app = express();
const router = express.Router();
const controllers = require(__dirname + "../controllers/controllers");


router.get('/', controllers.hello);	

router.get('/beerlist', controllers.beerList);

module.exports = router;

