
$(function () {
  $(".add-cart").on("click", function () {
    alert("加入購物車");
  })




  $("#reduceNumber1").on("click", function () {
    let number = parseInt($("#product1").text());
    let price = parseInt($("#productPrice1").text());

    if (number >= 0, number == 0, number--) {
      number += "";
      let product1Price = price * number;

      $("#product1").text(number);
      $("#totalPrice1").text(`NT$ ` + product1Price);
    };
    let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;
    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);

    if (addship - 300 == 0) {
      $("#totalPrice").text(`NT$ ` + 0);
    }

  })

  $("#reduceNumber2").on("click", function () {
    let number = parseInt($("#product2").text());
    let price = parseInt($("#productPrice2").text());

    if (number >= 0, number == 0, number--) {
      number += "";

      $("#product2").text(number);
      $("#totalPrice2").text(`NT$ ` + price * number);

    }; let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;

    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);

    if (addship - 300 == 0) {
      $("#totalPrice").text(`NT$ ` + 0);
    }
  })
  $("#reduceNumber3").on("click", function () {
    let number = parseInt($("#product3").text());
    let price = parseInt($("#productPrice3").text());

    if (number >= 0, number == 0, number--) {
      number += "";
      $("#product3").text(number);
      $("#totalPrice3").text(`NT$ ` + price * number);

    };
    let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;


    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);

    if (addship - 300 == 0) {
      $("#totalPrice").text(`NT$ ` + 0);
    }
  })



  $("#addNumber1").on("click", function () {
    let number = parseInt($("#product1").text());
    let price = parseInt($("#productPrice1").text());
    number += 1;
    number += "";
    $("#product1").text(number);
    $("#totalPrice1").text(`NT$ ` + price * number);
    let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;


    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);

  })
  $("#addNumber2").on("click", function () {
    let number = parseInt($("#product2").text());
    let price = parseInt($("#productPrice2").text());
    number += 1;
    number += "";
    $("#product2").text(number);
    $("#totalPrice2").text(`NT$ ` + price * number);
    let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;


    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);

  })
  $("#addNumber3").on("click", function () {
    let number = parseInt($("#product3").text());
    let price = parseInt($("#productPrice3").text());
    number += 1;
    number += "";
    $("#product3").text(number);
    $("#totalPrice3").text(`NT$ ` + price * number);
    let price1Number = parseInt($("#product1").text());
    let price2Number = parseInt($("#product2").text());
    let price3Number = parseInt($("#product3").text());

    let price1 = parseInt($("#productPrice1").text());
    let price2 = parseInt($("#productPrice2").text());
    let price3 = parseInt($("#productPrice3").text());

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
    let addship = totalPrice + 300;


    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);
  })

  var price1Number = parseInt($("#product1").text()); //2
  var price2Number = parseInt($("#product2").text()); //2
  var price3Number = parseInt($("#product3").text()); //2
  var price1 = parseInt($("#productPrice1").text()); //120
  var price2 = parseInt($("#productPrice2").text()); //150
  var price3 = parseInt($("#productPrice3").text()); //150

  $("#totalPrice1").text(`NT$ ` + price1Number * price1)
  $("#totalPrice2").text(`NT$ ` + price2Number * price2)
  $("#totalPrice3").text(`NT$ ` + price3Number * price3)

  var totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3;
  var addship = totalPrice + 300;

  $("#priceNote").text(`NT$ ` + totalPrice);
  $("#totalPrice").text(`NT$ ` + addship);


  $(".fa-trash").on("click", function () {
    $(this).parent().addClass("not-active");

    let number = parseInt($(this).prev().prev().find("span:nth-child(2)").text());
    let price = parseInt($(this).prev().prev().prev().children("span:nth-child(2)").text().substr(3));
    console.log(number * price);

    let totalPrice = price1Number * price1 + price2Number * price2 + price3Number * price3 - number * price;
    console.log(totalPrice);

    let addship = totalPrice + 300;

    $("#priceNote").text(`NT$ ` + totalPrice);
    $("#totalPrice").text(`NT$ ` + addship);
    number == 0;
    price == 0;
  })


  $("#next-1").on("click", function () {
    let phoneNumberInput = $("#phoneNumber").val();
    let phoneNumber = /09\d{2}-\d{3}-\d{3}/;

    if (phoneNumber.test(phoneNumberInput)) {
      $(location).attr("href", "https://allenw1991.github.io/dessertStore_reMaster/checkout-2.html")
    } else {
      alert("請輸入正確格式聯絡電話或手機")

    };

  })
  $("#next-2").on("click", function () {
    let creditCardInput = $("#credit-card-number").val();
    let creditCardNumber = /\d{4}-\d{4}-\d{4}-\d{4}/;

    let securityCodeInput = $("#securityCode").val();
    let securityCode = /\d{3}/;


    if (creditCardNumber.test(creditCardInput) && securityCode.test(securityCodeInput)) {
      $(location).attr("href", "https://allenw1991.github.io/dessertStore_reMaster/check-out-3-1.html")
    } else {
      alert("請輸入正確信用卡號碼或背面三碼")
    };

  })


})