/*class Room {
    constructor(cust_name, check_in_date,check_out_date,room) {
      this.cust_name = name ;
      this.check_in_date = check_in_date;
      this.check_out_date = check_out_date;
      this.room = room;
    }

  }

  //let room = new Room(cust_name, check_in_date,check_out_date,room);


  class Normal extends Room {
    constructor(room) {
      super(room);
      this.rate = 2000;
      if(room=="Normal")
      {
        display();
      }
      
    }
    Display() {
      console.log("we r in a normla room")
      return this.present() + ', it is a ' + this.x;
    }
  }


  class Deluxe extends Room {
    constructor(room) {
      super(room);
      this.rate = 4000;
      if(room=="Deluxe")
      {
        display();
      }
    }
    display() {
      console.log("we e in deluxe room");
    }
  }
*/



  class Room {
    constructor(cust_name, check_in_date, check_out_date, gst_rate, room_cost) {
      this.cust_name = cust_name;
      this.check_in_date = check_in_date;
      this.check_out_date = check_out_date;
      this.gst_rate = gst_rate;
      this.room_cost = room_cost;
    }
  
    getInvoice() {
      var generated_invoice = "";
      generated_invoice += "<h3> Customer name : " + this.cust_name + "</h3>";
      generated_invoice += "<h3> Check-in date : " + this.check_in_date + "</h3>";
      generated_invoice +=
        "<h3> Check-out date : " + this.check_out_date + "</h3>";
      // var diff = new Date(check_out_date - check_in_date);
      // var days = Math.floor(diff / 1000 / 60 / 60 / 24);
      return generated_invoice;
    }
  }
  
  export class Normal extends Room {
    constructor(cust_name, check_in_date, check_out_date) {
      super(cust_name, check_in_date, check_out_date, 12, 2000);
    }
  }
  
  export class Deluxe extends Room {
    constructor(cust_name, check_in_date, check_out_date) {
      super(cust_name, check_in_date, check_out_date, 12, 4000);
    }
  }
  
  // module.exports = { Normal, Deluxe };