const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const video = require('../models/video');

const db = "mongodb://localhost:27017/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("Error! " + err);
    }
});
router.get('/videos', function (req, res) {
    console.log('get request for all videos');
    video.find({})
        .exec(function (err, videos) {
            if (err) {
                console.log("error retrieving videos");

            } else {
                res.json(videos);
                console.log('Success!');
            }
        });
});

router.post('/videos', function (req, res) {
    console.log('post a video');
    var newVideo = new video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function (err, insertedVideo) {
        if (err) {
            console.log('error saving video');

        } else {
            res.json(insertedVideo)
        }
    });

});

router.put('/videos/:id', function (req, res) {
    console.log('update a video');
    video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title,url:req.body.url,description:req.body.description}
        },
        {
            new:true
        },
        
          function (err,updatedVideo) {
              if(err){
                  console.log('error in updating video')
              }else{
                  res.json(updatedVideo)
              }
          }
        
        );
    });

    router.delete('/videos/:id',function(req,res){
        console.log('deleting a video');
        video.findByIdAndRemove(req.params.id,function(err, deletedVideo){
            if(err){
                console.log('error in deleting video')
            }else{
                res.json(deletedVideo)
            }
        });
    });

module.exports = router;