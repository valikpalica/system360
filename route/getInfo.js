const express = require('express');
const router = express.Router();
const alltypeAnceta = require('../Controllers/allTypeAnceta');
const getPersonInfo = require('../Controllers/getPerson');
const saveComanderTest = require('../Controllers/saveComanderTest');
const saveAllTest = require('../Controllers/saveAllTest');
const checkAuth = require('./checkAuth');


router.get('/alltypeAnceta',checkAuth,alltypeAnceta);

router.post('/getPersonInfo',checkAuth,getPersonInfo);

router.post('/save',checkAuth,saveAllTest);
router.post('/saveComanderTest',checkAuth,saveComanderTest);

module.exports = router;