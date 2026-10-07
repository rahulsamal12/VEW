const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/vew_db').then(() => {
  const SiteImage = require('./src/models/SiteImage');
  SiteImage.deleteOne({ section: 'innovation' }).then(() => {
    console.log('Deleted bad innovation image from vew_db');
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
});
