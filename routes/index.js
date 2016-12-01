var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: "./uploads"});
var _ = require('lodash');
var userModel = require('.././models/User');
var appCounterModel = require('.././models/appCounter');
/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('serviceForm', {title: 'MyIMMs - e-Services'});
});



router.get('/reprint', function (req, res, next) {
    res.render('findApplicant', {title: 'REPRINT MACS APPLICATION'});
});


router.get('/findApplicant/:APPLNO', function (req, res, next) {

    var APPLNO = req.params.APPLNO;
    if (!APPLNO){
          res.status(400);
        res.json({message: 'Invalid app no.'});
        return
    }
    userModel.findOne({ APPLNO : APPLNO}).lean().exec().then(function (user) {
        if (user){
            res.json(user);
        } else {
            res.status(400);
            res.json({message: 'No applicant found for the '+ APPLNO});
        }

    }, function (err) {
        console.log(err);
        res.status(400);
        res.json({message: 'Unable to save form data due to an unexpected error.'});
    });
});

router.post('/myimms/macs', upload.single('file'), function (req, res, next) {

    var newUser = req.body;
    var appCounter = 1;
    appCounterModel.findOne({}).then(function (counterData) {
        console.log('counterData', counterData);
        if (counterData) {
            appCounter = counterData.current ? counterData.current : appCounter;
            counterData.current += 1;
            counterData.save(function () {
                saveApplication();
            })
        } else {
            appCounter += 1;
            appCounterModel.create({current: appCounter}).then(function () {
                saveApplication();
            });
        }

    }, function (err) {
        console.log(err);
        res.render('serviceForm', {message: 'Unable to save form data due to an unexpected error.'});
    });

    function saveApplication() {
        newUser.APPLNO = ["EGBRJ", _.padStart(appCounter, 5, '0')].join('');
        userModel.create(newUser).then(function (user) {
            res.render('serviceApllication', {message: "Application is saved successfully your application id is " + user.APPLNO, USER_APPLNO: user.APPLNO });
        }, function (err) {
            console.log(err);
            res.render('serviceForm', {message: 'Unable to save form data due to an unexpected error.'});
        });
    }


});

module.exports = router;
