const { Schema, Types, model } = require('mongoose');
const { string } = require('yargs');
//const teacherSchema = require('./Teacher');

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

        onTheWay: {
            type: Boolean,
            default: false,
        },
        arrived: {
            type: Boolean,
            default: false,
        },
        requested: {
            type: Boolean,
            default: false,
        },
        reason:{
            type: String
        },
        teacherName:{
            type: String,
            required: true,
        }
    }
);


studentSchema.post('save', async function (doc, next) {
    if (this.isNew) {
        try {
            // Create a new teacher profile with the same name as the user profile
            await Student.create({
                studentName: this.studentName,
                onTheWay: this.onTheWay,
                arrived: this.arrived,
                requested: this.requested
            });
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
    console.log('student created');
});

const Student = model('Student', studentSchema);
module.exports = Student;