// Change out any "public_id" for a public_id in your media library
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//////
// Updating w/ Upload API's Explicit
//////
cloudinary.uploader
  .explicit("public_id", {
    tags: ["scottish fold", "adult"],
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//////
// Updating w/ Admin API's Update
//////
// cloudinary.api
//   .update("public_id", {
//     tags: "scottish fold,adult",
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////
// Deleting w/ Upload API's Destroy
//////
// cloudinary.uploader
//   .destroy("asset_id", {
//     invalidate: true,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////
// Deleting w/ Admin API's Delete Resources
//////
// cloudinary.api
//   .delete_resources(["asset_id1", "asset_id2"], {
//     invalidate: true,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////
// Renaming w/ Upload API's Rename
//////
// cloudinary.uploader
//   .rename("old_asset_id", "new_asset_id", {
//     invalidate: true,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
