const fs = require("fs");
const path = require("path");

const bookingDataPath = path.join(__dirname, "../data/bookings.json");

module.exports = class Booking {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    fs.readFile(bookingDataPath, (err, data) => {
      let bookings = [];

      try {
        bookings = data && data.length > 0 ? JSON.parse(data) : [];
      } catch (e) {
        bookings = [];
      }

      bookings.push(this);

      fs.writeFile(bookingDataPath, JSON.stringify(bookings, null, 2), (err) => {
        if (err) console.log("Error saving booking:", err);
      });
    });
  }

  static getAll(cb) {
    fs.readFile(bookingDataPath, (err, data) => {
      try {
        const bookings = data && data.length > 0 ? JSON.parse(data) : [];
        cb(bookings);
      } catch (e) {
        cb([]);
      }
    });
  }
};