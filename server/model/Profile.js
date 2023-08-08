const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  subjects: [
    {
      type: String,
      trim: true,
    },
  ],
});

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


// 8/5 jj This should save profile as new teacher
profileSchema.post('save', async function (doc, next) {
  if (this.isNew) {
    try {
      // Create a new teacher profile with the same name as the user profile
      await Teacher.create({
        teacherName: this.name,
      });
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
  console.log('teacher created');
});

// end of that change 8/5

const Profile = model('Profile', profileSchema);

module.exports = Profile;

module.exports = Profile;
