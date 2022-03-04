const express = require('express');
const { Axios, default: axios } = require('axios');
const router = express.Router();
const db = require('../utils/db');
const users = require('../models/users');
const { route } = require('express/lib/router');

router.get('/users', async (req, res) => {
	await users
		.find()
		.then((result) => {
			console.log(result);
			res.status(200).send(result);
			// throw new Error('masalah system');
		})
		.catch((err) => {
			res.status(500).send(err.message);
		});
});

router.get('/covid', (req, res) => {
	res.sendStatus(200);
});

module.exports = router;
