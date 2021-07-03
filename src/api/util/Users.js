module.exports = {
    MultipleUser: function(users){
        return users.map(user => user.toObject());
    },

    SingleUser: function(user){
        return user ? user.toObject() : user;
    }
}