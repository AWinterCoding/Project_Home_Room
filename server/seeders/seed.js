const db = require('../config/connection');
const { Profile, Student} = require('../model');
const profileSeeds = require('./profileSeeds.json');
const studentSeeds = require('./studentSeeds.json')

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Student.deleteMany({});
    await Student.create(studentSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
