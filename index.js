require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./src/routes');
const port = process.env.PORT || 5000;
const users = require('./src/models/users');

app.use(express.json());
app.use('/api/', router);

setInterval(() => {
	const timestamp = new Date();
	const hour = timestamp.getHours();
	const url = 'https://data.covid19.go.id/public/api/update.json';
	if (hour == 1) {
		try {
			axios.get(url).then((e) => {
				console.log(e.data.data);
				const data = new users({ username: e.data.data.total_spesimen.toString() });
				data.save()
					.then((e) => {
						console.log(e);
					})
					.catch((e) => {
						console.log(e);
					});
			});
		} catch (error) {}
	}
}, 1000);

app.listen(port, () => {
	console.log('listening on port ', port);
});
