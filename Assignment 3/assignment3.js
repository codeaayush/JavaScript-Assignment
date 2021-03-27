/*function validateForm() {
  var cust_name=document.getElementById("name").value;
 console.log(cust_name);
  var check_in_date = document.getElementById("check_in_date").value;
  var check_out_date = document.getElementById("check_out_date").value;
  console.log(check_in_date);
  console.log(check_out_date);
  var rate;
  var gst;
  var room = document.getElementById("room").value;
  document.getElementById("h1").innerHTML = "<h1>" + cust_name + "</h1>";
  
  console.log(room);
}
*/

import Room from "./Room";
import Normal from "./Room";
import Deluxe from "./Room";

function validateForm() {
  console.log("hi");
  var cust_name = document.getElementById("name").value;
  var check_in_date = document.getElementById("check_in_date").value;
  var check_out_date = document.getElementById("check_out_date").value;
  var room_type = document.getElementById("room").value;

  if (check_out_date < check_in_date) {
    alert("please enter valid date");
    return;
  }

  var generated_invoice = "";
  // const roomObj = require("./Room"); //importing class;

  if (room_type == "Normal") {
    let normal = new Normal(cust_name, check_in_date, check_out_date);
    generated_invoice = normal.getInvoice();
  } else {
    let deluxe = new Deluxe(cust_name, check_in_date, check_out_date);
    generated_invoice = deluxe.getInvoice();
  }

  document.getElementById("invoice_details").innerHTML = generated_invoice;
}


 