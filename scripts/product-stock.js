$(function () {

  console.log("Test");

  // get product item id
  //var productId = document.querySelector(".ProductItem").dataset.itemId;

  // get product url
  var url = document.querySelector("meta[property='og:url']").getAttribute('content');

  // using product url, get the json item
  $.getJSON(
    url + "?format=json"
  ).done(function (product) {

    console.log(product);

    if (product.item) {

      // get the stock total
      var stockTotal = product.item.structuredContent.variants[0].qtyInStock;

      console.log(stockTotal);

      // create a label

      // set the stock total to the label

    }

  });

});
