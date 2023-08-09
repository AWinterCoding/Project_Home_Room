const db = require('../config/connection');
const { Profile } = require('../model');
const profileSeeds = require('./profileSeeds.json');
const { Student } = require('../model');
const studentSeeds = require('../seeders/studentSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    console.log('delete many profiles')
    await Profile.create(profileSeeds);
    console.log('create profiles')
    await Student.deleteMany({});
    console.log('delete students')
    await Student.create(studentSeeds);
    console.log('create students ')
    console.log('students are seeded bro');
    console.log('all done!');
    process.exit(0);

  } catch (err) {
    throw err;
  }
});
