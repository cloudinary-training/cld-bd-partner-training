# cld-bd-partner-training
Partner Integration Foundations
## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install

```bash
# verify versions
$ node --version
v16.13.0

$ npm --version
8.1.0
```

### Choose an IDE or Use Text Editor

- [Visual Studio Code](https://code.visualstudio.com/download) 
- [WebStorm](https://www.jetbrains.com/webstorm/) 
- [Sublime](https://www.sublimetext.com/) 
- [Atom](https://atom.io/) 
- [iTerm](https://iterm2.com/) 

### Download Repository

[Basic Set Up for Partner Training](https://github.com/cloudinary-training/cld-bd-partner-training)

- Node scripts for this module are located in the  `/optimization`, `access-control` directories
- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME

3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

### Install Dependencies

Npm install Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

### Run Code
Most functions are commented out for demo purposes, so you'll first need to uncomment functions to run them.

```bash
node file_name.js
```

