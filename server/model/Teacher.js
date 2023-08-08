const {Schema, Types, SchemaType, model} = require('mongoose');
const { studentSchema } = require('./Student');

const teacherSchema = new Schema(
    {
    teacherID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    teacherName: {
        type: String,
        required: true,
    },
    requestedStudents:[{
        type: Schema.Types.ObjectId,
        ref: 'Student'
}],
classRoster: [{
    type: Schema.Types.ObjectId, 
    ref: 'Student',
}]
});
const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;