departTripTicket = {
  name: "John Doe",
  from: "USA, California",
  to: "Indonesia, Bali",
  businessClass: true,
  upgrade() {
    if (this.businessClass == false) {
      this.businessClass = true;
    } else {
      console.log(`Your ticket is already business class!`);
    }
  },
  flightTime() {
    console.log(`flight Time: ${this.arriveTime - this.leaveTime} hours.`);
  },
};
departTripTicket.leaveTime = 1;
departTripTicket.arriveTime = 22;
returnTripTicket = {
  name: "John Doe",
  from: "Indonesia, Bali",
  to: "USA, California",
  businessClass: false,
  upgrade() {
    if (this.businessClass == false) {
      this.businessClass = true;
    } else {
      console.log(`Your ticket is already business class!`);
    }
  },
};

departTripTicket.upgrade();
departTripTicket.flightTime();
returnTripTicket.upgrade();
console.log(departTripTicket);
console.log(returnTripTicket);
