require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//////
// Upload Using the Type Parameter
////
cloudinary.uploader.upload("https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg", 
  {
    type: "authenticated"
  })
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});