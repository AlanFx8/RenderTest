const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

//Start server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/test', require('./routes/testRoute'));

//Set a default path to the client once built
if (process.env.NODE_ENV === "production"){
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

//Listen to server
app.listen(PORT, () => console.log(`App running on PORT: ${PORT}, in ${process.env.NODE_ENV} Mode`));