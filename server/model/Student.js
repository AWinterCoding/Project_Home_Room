const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const { string } = require('yargs');


const studentSchema = new Schema(
    {
    studentID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
        // this needs to be a student that exists--
    },
    studentName: {
        type: String,
        required: true,
    },
    //I am testing to see if the one to many relationship will hold the homeroom teacher like this.
    homeroomTeacherEmail: {
        type: String,
        required:true,
    },

    lastKnownLocation: {
        type: mongoose.Types.ObjectId,
    },

    
    
}
);

const Student = model('student', studentSchema);
module.exports = Student;