const { AuthenticationError } = require('apollo-server-express');
const { Profile, Student, Teacher } = require('../model');
const { signToken } = require('../util/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    students: async() => {
      return Student.find();
    },
    student: async(studentID) =>{
      return Student.findOne({_id: studentID});
    },
    teacher: async(teacherID) =>{
      return Teacher.findOne({_id:teacherID});
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addSubject: async (parent, { profileId, subject }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { subjects: subject },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a subjectl from their own profile
    removeSubject: async (parent, { subject }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { subjects: subject } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    //method to change the status of whether or not a student is on the way
    studentOnTheWay: async(student, AwayStatus) => {
      return Student.findOneAndUpdate(
        {_id: student},
        {$set: {onTheWay: AwayStatus}},
        {new: true}
      );
    },

    studentArrived: async(student, ArrivedStatus) => {
      return Student.findOneAndUpdate(
        {id: student},
        {$set: {arrived: ArrivedStatus}},
        {new: true}
      );
    },
    studentRequested: async(student, requestedStatus) => {
      return Student.findOneAndUpdate(
        {id: student},
        {$set: {requested: requestedStatus}},
        {new: true}
      );
    }
  },
};

module.exports = resolvers;
