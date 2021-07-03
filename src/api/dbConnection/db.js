const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/user_management', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('connect succesfully')
    }catch(err){
        console.log('connect failed');
    }
}

module.exports = { connect};