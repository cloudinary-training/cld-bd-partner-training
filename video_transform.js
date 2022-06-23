// Change out any "publicID" for a public ID in your media library
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//////
// Cropping
//////
cloudinary.video("publicID", {
  height: 200,
  width: 200,
  crop: "crop",
});

//////
// Cropping w/ Gravity
//////
// cloudinary.video("publicID", {
//   width: 200,
//   crop: "fill",
//   gravity: "auto",
// });

//////
// Trim
//////
// cloudinary.video("publicID", {
//   end_offset: "3.5",
//   start_offset: "1.5",
// });

//////
// Loop
//////
// cloudinary.video("publicID", {
//   effect: "loop:2",
// });

//////
// Reverse
//////
// cloudinary.video("publicID", {
//   effect: "reverse",
// });
