var url = 'mongodb://localhost:27017/jurassic';

var mongoose = require('mongoose');
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function (cb) {
  console.log('Established Connection to Database');
});

var characterSchema = mongoose.Schema({
  occupation: String,
  gender: String,
  imageUrl: String,
  quotes: {},
  name: {
    title: String,
    first: String,
    last:  String,
    full:  String
  },
  portrayedBy: {
    first: String,
    last:  String,
    full:  String
  }
});

exports.Character = mongoose.model('Character', characterSchema);
//Mongoose will interpret 'Character' as characters when it checks Mongo
