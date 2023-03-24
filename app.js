// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// const app = express();
// const port = 5000;


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// //midleware
// app.use(express.json())


// //home page routin
// app.get("/",(req,res)=>{
//   res.send("home page")
// })

// // server
// app.listen(port,()=>{
//   console.log(`server is runing on port:${port}`)
// })

// module.exports = app;








const express = require('express');
const multer  = require('multer');
const { dirname } = require('path');
const path = require('path');
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))




// homepage routing
app.get('/', (req, res)=>{
    res.status(200).send({message: "Welcome!"});
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    console.log()
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('profilepic'), (req, res) => {
  res.status(200).send({
    success: "success",
    message: "profilepic has uploaded successfully",
    path:`http://localhost:5000/uploads/${req.file.filename}`
 
  })
}) 


// server 
app.listen(port, ()=>{
console.log(`server is runing on port no:${port}`);
});
