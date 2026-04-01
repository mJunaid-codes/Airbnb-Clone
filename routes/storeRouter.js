
// External Modules
const express = require("express");
const storeRouter = express.Router();

// Local Modules
const storeController = require("../controllers/storeController");
const bookingController = require("../controllers/bookingController");

// ----------------------
// HOME / STORE ROUTES
// ----------------------
storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);

// ----------------------
// BOOKING ROUTES
// ----------------------
storeRouter.get("/bookings", bookingController.getBookings);
storeRouter.post("/book-home", bookingController.bookHome);

// ----------------------
// FAVOURITES ROUTES
// ----------------------
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.post("/favourites", storeController.postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId", storeController.postRemoveFromFavourite);

module.exports = storeRouter;