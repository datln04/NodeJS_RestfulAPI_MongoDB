const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const User = new Schema({
    name: {type: String, maxlength: 50},
    address: {type: String, maxlength:100},
    phone: {type: String, maxlength: 12}
},{
    timestamps: true,
});

User.plugin(mongoose_delete, 
{ 
    deleteAt:true, 
    overrideMethods: 'all' 
});

module.exports = mongoose.model('User', User);