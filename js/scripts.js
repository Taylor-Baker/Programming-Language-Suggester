function add(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

$(document).ready(function() {
  $('#languageForm').submit(function(event) {
    event.preventDefault();
    let product = parseInt($("input:radio[name=product]:checked").val());
    let platform = parseInt($("input:radio[name=platform]:checked").val());
    let operatingSystem = parseInt($("input:radio[name=operatingSystem]:checked").val());
    let pickAnEnd = parseInt($("input:radio[name=pickAnEnd]:checked").val());
    let projectSize = parseInt($("input:radio[name=projectSize]:checked").val());

    let result = add(product, platform, operatingSystem, pickAnEnd, projectSize);

    $('#output').text(`${result}`);
    
    if (result <= 8) {
      $("#output").text("You should learn JavaScript!");
      $("#rb-show, #py-show, #cs-show, #jv-show").hide();
      $("#js-show").show();
    } else if (result <= 11) {
      $("#output").text("You should learn Ruby!");
      $("#rb-show").show();
      $("#js-show, #py-show, #cs-show, #jv-show").hide();
    } else if (result <= 14) {
      $("#output").text("You should learn Python!");
      $("#py-show").show();
      $("#rb-show, #js-show, #cs-show, #jv-show").hide();
    } else if (result <= 17) {
      $("#output").text("You should learn C#!");
      $("#rb-show, #py-show, #jv-show, #js-show").hide();
      $("#cs-show").show();
    } else if (result <= 20) {
      $("#output").text("You should learn Java!");
      $("#rb-show, #py-show, #cs-show, #js-show").hide();
      $("#jv-show").show();
    } else {
      $("#output").text("Please answer all of the questions provided.");
      $("#js-show, #rb-show, #py-show, #cs-show, #jv-show").hide();
      $().show();
    }

  });
});