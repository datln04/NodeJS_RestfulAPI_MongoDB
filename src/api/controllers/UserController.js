const {MultipleUser, SingleUser}  = require('../util/Users');
const User = require('../models/Users');

class UserController{
    GetList(req, res, next){
        User.find({})
            .then(user => {
                res.json(MultipleUser(user));
            })
            .catch(next);
    }

    GetDetail(req,res, next){
        User.findOne({_id: req.params.id})
            .then(user => {
                res.json(SingleUser(user));
            })
            .catch(next);
    }

    Create(req,res, next){
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then(() => res.json(user))
            .catch(next);
            
    }
    Update(req,res, next){
        const formData = req.body;
        User.updateOne({_id: req.params.id}, formData)
            .then(() => res.redirect('/users'))
            .catch(next);
    }

    Delete(req,res, next){
        User.delete({_id: req.params.id})
            .then(() => res.redirect('/users'))
            .catch(next);
    }
}


module.exports = new UserController();