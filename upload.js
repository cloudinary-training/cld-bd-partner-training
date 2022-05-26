require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//////
// Basic Upload Method
//////
cloudinary.uploader.upload("https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg")
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

//////
// Setting the Public ID
//////
// cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', {
//         public_id: 'dog'
//     })
//     .then(uploadResult => console.log(uploadResult))
//     .catch(error => console.error(error));

//////
// Using the Filename as the Public ID
//////
// cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', {
//         use_filename: true
//     })
//     .then(uploadResult => console.log(uploadResult))
//     .catch(error => console.error(error));

//////
// Adding the Unique Parameter to the Filename
//////
// cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', {
//         use_filename: true,
//         unique_filename: false
//     })
//     .then(uploadResult => console.log(uploadResult))
//     .catch(error => console.error(error));

//////
// Setting the Resource Type
//////
// cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', {
//         public_id: 'dog',
//         resource_type: 'auto'
//     })
//     .then(uploadResult => console.log(uploadResult))
//     .catch(error => console.error(error));