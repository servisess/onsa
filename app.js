var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var nodemailer = require("nodemailer");

var pdf = require("html-pdf");
var fileURLToPath = require("url");
var dirname = require("path");
var pdfTemp = require("./doc/index.js");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// ya rab
// NODEMAILER TRANSPORT FOR SENDING INVOICE VIA EMAIL
var transporter = nodemailer.createTransport({
 host: "smtp.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "success@resttime.org",
    pass: "Fula@1212",
  },
});

var options = { format: "A4" };

app.post("/sendOrder", function (req, res, next) {
  // console.log("body",req.body)
  pdf.create(pdfTemp.doc(req.body), options).toFile("invoice.pdf", (err) => {
    // send mail with defined transport object
    // alhaddad1store@gmail.com fack21gasa@gmail.com
    transporter.sendMail(
      {
        from: `<hello@arcinvoice.com>`, // sender address
        to: `alhaddadstore404@gmail.com`, // list of receivers
        replyTo: `<hello@arcinvoice.com>`,
        subject: `invoice from ${req.body.name}`, // Subject line
        text: `Invoice from Test invoice`, // plain text body
        html: `<h1>فاتورة ${req.body.name} </h1>`, // html body
        attachments: [
          {
            filename: "invoice.pdf",
            path: `${__dirname}/invoice.pdf`,
          },
        ],
      },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
  res.redirect("/");
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
