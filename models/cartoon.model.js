const mongoose = require("mongoose");


//blueprint
const cartoonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    main_character: { type: String, required: true },
    villain: { type: String, required: true },
    age_group: { type: Number, required: true },
    genre: { type: String, required: true}
  },
  {
    timestamps: true,
  }
);

const cartoon = mongoose.model("cartoons", cartoonSchema);

module.exports = cartoon;
