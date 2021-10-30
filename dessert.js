
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


  })
  $("#reduceNumber2").on("click", function () {
    let number = parseInt($("#product2").text());
    let price = parseInt($("#productPrice2").text());

    if (number >= 0, number == 0, number--) {
      number += "";
      let product2Price = price * number;

      $("#product2").text(number);
      $("#totalPrice2").text(`NT$ ` + price * number);

    };
  })
  $("#reduceNumber3").on("click", function () {
    let number = parseInt($("#product3").text());
    let price = parseInt($("#productPrice3").text());

    if (number >= 0, number == 0, number--) {
      number += "";
      $("#product3").text(number);
      $("#totalPrice3").text(`NT$ ` + price * number);

    };
  })



  $("#addNumber1").on("click", function () {
    let number = parseInt($("#product1").text());
    let price = parseInt($("#productPrice1").text());
    number += 1;
    number += "";
    $("#product1").text(number);
    $("#totalPrice1").text(`NT$ ` + price * number);
  })
  $("#addNumber2").on("click", function () {
    let number = parseInt($("#product2").text());
    let price = parseInt($("#productPrice2").text());
    number += 1;
    number += "";
    $("#product2").text(number);
    $("#totalPrice2").text(`NT$ ` + price * number);
  })
  $("#addNumber3").on("click", function () {
    let number = parseInt($("#product3").text());
    let price = parseInt($("#productPrice3").text());
    number += 1;
    number += "";
    $("#product3").text(number);
    $("#totalPrice3").text(`NT$ ` + price * number);
  })

})