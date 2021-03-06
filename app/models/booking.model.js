const mongoose = require("mongoose");

const Booking = mongoose.model(
  "Booking",
  new mongoose.Schema({
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ownerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    itemID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    comment: String,
    refuseReason: String,
    dateStart: Date,
    dateEnd: Date,
    qtyWant: Number,
    status: String,
    piid: String,
    intentID: String,
    chargeID: String,
    saveCard: String,
  })
);

module.exports = Booking;
