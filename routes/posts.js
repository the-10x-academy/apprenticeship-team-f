const express = require('express');
const { diskStorage } = require('multer');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(res,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
});
const upload = multer({storage:storage})

/* create posts */
router.get('/create',function(req,res,next){
    res.render('create',{title:'Create Post'});
});

// for single file upload
// router.post('/upload',upload.single('postimage'),function(req,res,next){
//     const fileinfo = req.file.filename;
//     const author = req.body.author;
//     console.log(author);
//     res.send(fileinfo);
// })

// for multiple file upload
router.post('/uploads',upload.array('postimage',5),function(req,res,next){
    const fileinfo = req.files;
    const author = req.body.author;
    console.log(author);
    res.send(fileinfo);
})

module.exports = router;