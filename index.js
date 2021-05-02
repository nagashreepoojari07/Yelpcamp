const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Campground = require('./models/Campgrounds')
mongoose.connect('mongodb://localhost:27017/yelp-camp', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("database connected")
});
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/makecampground', (req,res)=>{
    const camp = new Campground({
        title:"myun campground",
        description:"best campground",
    })
    res.send(camp)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})