const mongoose = require('mongoose');

const URI = 'mongodb+srv://AndresOtero:Andres12@basedato.drmlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;