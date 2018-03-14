$(function () {

  // get product item id
  //var productId = document.querySelector(".ProductItem").dataset.itemId;

  // get product url
  var url = document.querySelector("meta[property='og:url']").getAttribute('content');

  // using product url, get the json item
  $.getJSON(
    url + "?format=json"
  ).done(function (product) {

    console.log(product);

    // make sure this is a product and it has inventory
    if (product.item && product.item.structuredContent.variants.length > 0) {

      // get the stock total
      var stockTotal = product.item.structuredContent.variants[0].qtyInStock;

      console.log(stockTotal);

      // create a label

      // set the stock total to the label
      var text = "Spots available: " + stockTotal;
      $(".product-quantity-input").append("<div class='qty-in-stock'>" + text + "</div>");

    }

  });

});
