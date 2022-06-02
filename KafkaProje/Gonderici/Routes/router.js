const express = require('express');

const producerController=require('../controllers/gonderici.js');
const router = express.Router();

router.post('/gonderici',producerController.postcreateProducer);
module.exports  = router;
