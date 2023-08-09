const mongoose = require('mongoose')
const {Schema, model} = mongoose
const { studentSchema } = require('./Student');

const teacherSchema = new Schema(
    {
    // teacherID: {
    //     //model? type?
    //     type: Schema.model.ObjectId,
    //     default: () => new Types.ObjectId(),
    // },
    teacherName: {
        type: String,
        required: true,
    },
    requests:[{
        type: mongoose.Types.ObjectId,
        ref: 'Student'
}],
// mongoose.Types.ObjectId
});

const Teacher = model('Teacher', teacherSchema)
module.exports = Teacher;

