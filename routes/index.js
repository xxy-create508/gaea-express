    
var express = require('express');
var db = require('../sqldb');
var User = db.User;
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/add/user',function(req,res,next){
    console.log("++");
    var saveUser = {
        name:'xxx',
        age:10,
        height:11,
        weight:13
    };

    return db.sequelize.transaction(function(t){
        console.log("+++++++++++++++++++");
        return User.create(saveUser,{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});
router.post('/update/user/age',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.findById(req.body.userid,{
            transaction:t
        }).then(function(user){
            return user.update({
                age:req.body.age
            },{
                transaction:t
            }).then(function(result){
                res.send(result);
            }).catch(function(err){
                console.log("发生错误：" + err);
            });
        })
    })
});
module.exports = router;
