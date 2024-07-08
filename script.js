function calculateTotal() {

  let item_price = {}

  item_price.intern = ($("#qty_person_intern").val() * $("#rate_intern").val() * $("#qty_hours_intern").val());

  item_price.extern = ($("#qty_person_extern").val() * $("#rate_extern").val() * $("#qty_hours_extern").val());

  item_price.s4 = ($("#qty_person_s4").val() * $("#rate_s4").val() * $("#qty_hours_s4").val());

  let total = item_price.intern + item_price.extern + item_price.s4;

  console.log("Total: " + total);

  $("#total_value").text(total);

  hideAllResponses(total);

}

$(function () {
  $(".qty").on("change keyup", calculateTotal);
})
$(function () {
  $(".rate").on("change keyup", calculateTotal);
})
$(function () {
  $(".ma").on("change keyup", calculateTotal);
})

function hideAllResponses(total) {
  // Show the whole Response div.
  var divs = document.querySelectorAll('#response');
  for(var i = 0; i < divs.length; i++) {
    var div = divs[i];
    if(total>0){
      div.style.display = 'grid';
    }else{
      div.style.display = 'none';
    }
}

    // Show the amount of GA
    var ga1 = total / 6520.0;
    var ga2 = total / 3995.0;
    document.querySelectorAll('#ga_1')[0].innerText = "GA-Erstklasse zu verkaufen: " + ga1.toFixed(2);
    document.querySelectorAll('#ga_2')[0].innerText =  "GA-Zweitklasse zu verkaufen: " + ga2.toFixed(2);

    // Show the FV Dosto
    // Width 1600px to Height 737px
    let fv_img_width = 1666.0;
    let kosten_fv_dosto = 30645161.0;
    var fv_percentage = (total / kosten_fv_dosto);
    document.querySelectorAll('#fv_percentage')[0].innerText = "Percentage: " + (fv_percentage*100).toFixed(2) + "%";
    fv_inset = (fv_img_width-(fv_percentage*fv_img_width)).toFixed(0);
    document.querySelectorAll('#fv_pixel')[0].innerText = "FV Pixel (of 1600px width): " + (fv_img_width-fv_inset).toFixed(2);
    var fvDiv = document.querySelectorAll('#rectangularFV')
    for(var i = 0; i < fvDiv.length; i++) {
      console.log("FV inset: "+fv_inset);
      fvDiv[i].style.clipPath  = "inset(0px "+fv_inset+"px 0px 0px)";
    }

    // Show the GBT
    // Width 1600px to Height 737px
    let gbt_img_width = 1600.0;
    let kosten_gbt = 12200000000.0;
    var gbt_percentage = (total / kosten_gbt);
    document.querySelectorAll('#gbt_percentage')[0].innerText = "Percentage: " + (gbt_percentage*100).toFixed(2) + "%";
    gbt_inset = (gbt_img_width-(gbt_percentage*gbt_img_width)).toFixed(0);
    document.querySelectorAll('#gbt_pixel')[0].innerText = "GBT Pixel (of 1600px width): " + (gbt_img_width-gbt_inset).toFixed(2);
    var gbtDiv = document.querySelectorAll('#rectangularGBT')
    for(var i = 0; i < gbtDiv.length; i++) {
      console.log("GBT inset: "+gbt_inset);
      gbtDiv[i].style.clipPath  = "inset(0px "+gbt_inset+"px 0px 0px)";
    }
}
