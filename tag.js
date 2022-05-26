require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//////
// Tag an Existing Asset
//////
// Syntax: cloudinary.uploader.add_tag(tag, public_ids, options, callback);
cloudinary.uploader.add_tag("tag", [ "public_id" ])
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});