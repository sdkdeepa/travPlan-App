const projectData = {};
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.status(200).send('./dist/index.html')
})
module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`travPlan is listening to ${port}`);
  });

