const Booking = require("../models/booking");
const Home = require("../models/home");

exports.bookHome = (req, res, next) => {
  const homeId = req.body.homeId;

  const booking = new Booking(homeId);
  booking.save();

  res.redirect("/bookings");
};

exports.getBookings = (req, res, next) => {
  Booking.getAll(bookings => {
    Home.fetchAll(homes => {

      const bookedHomes = bookings
        .map(b => homes.find(h => h.id === b.homeId))
        .filter(home => home); // remove invalid/missing homes

      res.render("store/bookings", {
        pageTitle: "Your Bookings",
        currentPage: "bookings",
        homes: bookedHomes,
        bookings: bookings // ✅ ONLY send this
      });

    });
  });
};