const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../model');
const { signToken } = require('../util/auth');
const Student = require('../model/Student');
const Teacher = require('../model/Teacher');
const Subject = require('../model/Subject');

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
    students: async () => Student.find(),
    teachers: async () => Teacher.find(),
    subjects: async () => Subject.find(),
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
    studentGoing: async (parent, { subject }, context) => {
      if (context.onTheWay) {
        return Student.findOneAndUpdate(
          { _id: context.studentID },
          { $set: { onTheWay: leavingStatus } },
          { new: true }
        );
      }
    },
    createStudent: (_, { name }) => Student.create({ name }),
    createTeacher: (_, { name }) => Teacher.create({ name }),
    createSubject: (_, { name }) => Subject.create({ name }),
    assignStudentToSubject: async (_, { studentId, subjectId }) => {
      const student = await Student.findById(studentId);
      const subject = await Subject.findById(subjectId);

      if (student && subject) {
        student.subjects.push(subject);
        await student.save();
      }

      return student;
    },
    assignTeacherToSubject: async (_, { teacherId, subjectId }) => {
      const teacher = await Teacher.findById(teacherId);
      const subject = await Subject.findById(subjectId);

      if (teacher && subject) {
        teacher.subjects.push(subject);
        await teacher.save();
        subject.teachers.push(teacher);
        await subject.save();
      }

      return teacher;
    }
  },

  Student: {
    subjects: (student) => Subject.find({ _id: { $in: student.subjects } }),
  },
  Teacher: {
    subjects: (teacher) => Subject.find({ _id: { $in: teacher.subjects } }),
  },
  Subject: {
    students: (subject) => Student.find({ subjects: subject._id }),
    teachers: (subject) => Teacher.find({ subjects: subject._id }),
  },
};

module.exports = resolvers;
