// Change out any "public_id" for a public_id in your media library
// Change out any "some_tag" for a tag in your media library
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//////
// By Public ID w/ Admin API's Resources By IDs
//////
cloudinary.api
  .resources_by_ids(["public_id_1", "public_id_2"])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//////
// By Public ID w/ Search API
//////
// cloudinary.search
//   .execute((public_id = some_folder / asset_public_id))
//   .then((result) => console.log(result));

//////
// By Tag w/ Admin API's Resources By Tags
//////
// cloudinary.api
//   .resources_by_tag("some_tag")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////
// By Tag w/ Search API
//////
// cloudinary.search
//   .execute((tags = some_tag))
//   .then((result) => console.log(result));

//////
// By Contextual Metadata w/ Admin API
//////
// cloudinary.api
//   .resources_by_context("context_key")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////
// By Structural Metadata w/ Search API
//////
// cloudinary.search
//   .execute((metadata.external_id = specified_value))
//   .then((result) => console.log(result));
