const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/todo')
require('dotenv').config();
const app = express();
app.use(express.json());
mongoose.set("strictQuery", false)
const mongInstance = mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongInstance.then((r) => {
    console.log(`Database connected to ${process.env.DBURL}`)
    initServer()
});
mongInstance.catch((e) => { throw e });
app.use('/', routes);

function initServer() {
    app.listen(process.env.PORT, (e) => {
        if (e)
            throw e
        else
            console.log(`Server listening at port ${process.env.PORT}`);
    })
}