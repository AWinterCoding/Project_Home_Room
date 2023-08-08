const {Schema, Types} = require('mongoose');
const { string } = require('yargs');
const teacherSchema = require('./Teacher');

const studentSchema = new Schema(
    {
    studentID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    studentName: {
        type: String,
        required: true,
    },
    //I am testing to see if the one to many relationship will hold the homeroom teacher like this.
    homeroomTeacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'},
    onTheWay: {
        type: Boolean,
        default : false,
    },
    arrived: {
        type: Boolean,
        default: false,
    },
    requested:{
        type:Boolean,
        default: false,
    }
}
);

const Student = model('Student', studentSchema);

module.exports = Student;