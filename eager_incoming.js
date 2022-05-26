require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//////
// Eager
//////
cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2020/05/02/08/39/azalea-5120368_960_720.jpg', {
  public_id: 'waterfall_eager',
  eager: [
    {width: 50, height: 50, crop: "fill", gravity: "auto"}
  ]
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));

//////
// Incoming
//////
cloudinary.uploader.upload('https://cdn.pixabay.com/photo/2020/05/02/08/39/azalea-5120368_960_720.jpg', {
  public_id: 'waterfall_incoming',
  width: 100,
  height: 150,
  crop: "crop",
  gravity: "auto"
})
.then(uploadResult => console.log(uploadResult))
.catch(error => console.error(error));