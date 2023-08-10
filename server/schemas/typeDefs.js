const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    subjects: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Student {
    studentID: ID!
    studentName: String
    onTheWay: Boolean
    arrived: Boolean,
    requested: Boolean,
    reason: String
    teacherName: String
    subjects: [Subject]
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    students: [Student]
    teachers: [Teacher]
    subjects: [Subject]
    searchStudents(query: String!): [Student]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth   

    addSubject(profileId: ID!, subject: String!): Profile
    removeProfile: Profile
    removeSubject(subject: String!): Profile

    studentGoing(studentID: ID!, leavingStatus: Boolean!): Student
    createStudent(name: String!): Student
    createTeacher(name: String!): Teacher
    createSubject(name: String!): Subject
    assignStudentToSubject(studentId: ID!, subjectId: ID!): Student
    assignTeacherToSubject(teacherId: ID!, subjectId: ID!): Teacher
  }

  
  type Teacher {
    id: ID!
    name: String!
    subjects: [Subject]
  }

  type Subject {
    id: ID!
    name: String!
    students: [Student]
    teachers: [Teacher]
  }

 
`;

module.exports = typeDefs;
