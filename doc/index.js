

// var moment =require('moment') 
  
var doc= function (body) {   
    const today = new Date();
    console.log("from doc", body)
return `
<!DOCTYPE html>
<html>

<head>
    <link
    href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400&display=swap"
    rel="stylesheet"
    />
    <style>
        *{
            box-sizing: border-box;
            font-family: Tajawal;
        }
        .invoice-container {
            margin: 0;
            padding: 0;
            padding-top: 10px;
            font-family: 'Roboto', sans-serif;
            width: 600px;
            margin: 0px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        li {
            display: flex;
        }
        .imgTransform{
            z-index: 1;
            display: block;
            filter: brightness(1.5);
            opacity: 0.8;
            transform: rotate(336deg);
            -ms-transform:rotate(336deg); /* IE 9 */
            -moz-transform:rotate(336deg); /* Firefox */
            -webkit-transform:rotate(336deg); /* Safari and Chrome */
            -o-transform:rotate(336deg); /* Opera */
        }
    </style>
</head>

<body>
    <div class="invoice-container">
        <section class="header" style="display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 5px;
        width: 98%;">
            <table style="width: 100%;">
                <tr>
                    <td>
                        <div>
                            <ul style="list-style-type: none; ">
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/11968623911579738440-512.png">966 500279904
                                </li>
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://static.cdnlogo.com/logos/t/96/twitter-icon.svg">mtjrazizcom
                                </li>
                                <li><img width="15px" style="margin-right:7px;"
                                        src="https://icon-library.com/images/instragram-icon/instragram-icon-16.jpg">mtjrazizcom
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div>
                            <img class="logo"
                                src="https://orjeen.com/wp-content/themes/orjeen/imgs/logo-ar.png"
                                alt="logo" style="width: 160px; border-radius: 5px" />
                        </div>
                    </td>
                    <td>
                        <div>
                            <ul style="list-style-type: none;">
                                <li>mtjraziz@info.com</li>
                                <li>www.mtjraziz.com</li>
                                <li> السعودية - الرياض</li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>



        </section>
        <hr width="100%" color="gray" />

        <section class="wellcom" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;">

        <table width="100%">
            <tr>
                <td><div style="text-align: center;"><strong> ${today.toISOString().split('T')[0]}</strong>
            </div></td>
                <td><div style="border-left: 1px solid #000;text-align: center;"><strong>#609580</strong>
            </div></td>
            </tr>
        </table>
            
            
        </section>
        <section class="wellcom" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;">

        <table width="100%">
            <tr>
                <td><div style="text-align: center;">عميلنا العزيز
                <br> شكراً لتسوقك من متجر اورجين
                <br>تم انشاء طلبك بنجاح
            </div></td>
                <td><div style="border-left: 1px solid #000;text-align: center;">عميلنا العزيز
                <br> شكراً لتسوقك من متجر اورجين
                <br>تم انشاء طلبك بنجاح
            </div></td>
            </tr>
        </table>
        </section>

        <section class="clint" style="width: 90%; direction: rtl;
        padding-top: 10px;">
            <table style="
            color: #000;
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
          " class="item_table">
                <thead class="blueRow" style="
              background-color: #308cbb;
              width: 99%;
              border-radius: 20px;
              color: #fff;
            ">
                    <tr>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            اسم العميل
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            رقم الجوال
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            العنوان
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">${body.name}</td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.phone}
                        </td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.address} - ${body.address2}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="order" style="width:100%; direction: rtl;">
            <table style="
            color: #000;
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
          " class="item_table">
                <thead class="blueRow" style="
                      background-color: #308cbb;
                      width: 99%;
                      border-radius: 20px;
                      color: #fff;
                    ">
                    <tr>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            #
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            اسم الجهاز
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            السعر
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            العدد
                        </th>
                        <th style="
                          font-weight: bold;
                          padding: 10px;
                          border-bottom: 2px solid #000;
                        ">
                            الاجمالي
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">1</td>
                        <td style="border-bottom: 1px solid #ddd; max-width:50%; padding: 10px">${body.note} - }</td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.price} ر.س
                        </td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">1</td>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px">
                        ${body.price} ر.س
                        </td>
                    </tr>

                    <tr>
                        <td style="border-bottom: 1px solid #ddd; padding: 10px" colspan="5"
                            style="text-align: right; padding: 10px">
                            <strong>اجمالي سعرالجهاز : </strong>  ${body.price} ر.س
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="deliverd" style="width: 90%;
        border-radius: 20px;
        border: solid 1px gray;
        display: flex;
        flex-direction: row;
        justify-content: center;
        direction: rtl;
        margin-top: 10px;">
        <table style="width: 100%;">
            <tr>
                <td><div style="text-align: center;">التوصيل من خلال شركة  
                <br> شركة اراميكسو خلال 24 ساعة من الدفعة المقدمة
            </div></td>
                <td><div style="border-left: 1px solid #000;text-align: center;">العرض شامل الهدايا (ساعة + سماعة )
                <img class="imgTransform" src="https://orjeen.com/wp-content/themes/orjeen/imgs/logo-ar.png" style="z-index:1; width:120px;"/>
            </div></td>
            </tr>
        </table>
            
            
        </section>
        <section class="last" style="width: 90%;
        padding-top: 10px;
        direction: rtl;">
            <table style="
            color: #000;
            font-family: sans-serif;
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
          " class="item_table">
                <thead>
                    <tr class="blueRow" style="
                background-color: #308cbb;
                width: 99%;
                border-radius: 20px;
                color: #fff;
              ">
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            #
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            الدفعة
                        </th>
                        <th style="
                  font-weight: bold;
                  padding: 10px;
                  border-bottom: 2px solid #000;
                ">
                            تاريخ الاستحقاق
                        </th>
                    </tr>
                </thead>

            </table>
        </section>
        <table>
            <tr>
                <td>
                  <div>
            <p></p>
            <p></p>
        </div>  
                </td>
                <td>
                  <div>
            <p>متجر اورجين الاكتروني</p>
            <p>www.mtjraziz.com</p>
        </div>  
                </td>
                <td>
                  <div>
            <p></p>
            <p></p>
        </div>  
                </td>
            </tr>
        </table>
        
    </div>
</body>

</html>
`
;
};

module.exports = {
    doc
};
  