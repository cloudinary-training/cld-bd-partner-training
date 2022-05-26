// Change out any "publicID" for a public ID in your media library
require('dotenv').config();
const cloudinary = require('cloudinary').v2;


//////
// Cropping
//////
cloudinary.image("publicID", {width: 300, crop: "crop"})


//////
// Layers
//////
// cloudinary.image("publicID", 
//   {transformation: [
//     {color: "#FFFFFF", overlay: {font_family: "Arial", font_size: 80, text: "Layer%20Practice"}},
//     {flags: "layer_apply"}
//   ]}
// )


//////
// Gravity
//////
// cloudinary.image("publicID", 
//   {
//     gravity: "auto", 
//     height: 700, 
//     width: 300, 
//     crop: "fill"
//   })

//////
// Format
//////
// cloudinary.image("publicID", 
//   {transformation: [
//     {width: 500, crop: "scale"},
//     {fetch_format: "auto"}
//   ]})


//////
// Quality
//////
// cloudinary.image("publicID", 
//   {transformation: [
//     {width: 500, crop: "scale"},
//     {fetch_format: "auto"},
//     {quality: "auto"}
//   ]})