const {Schema, Types, SchemaType} = require('mongoose');
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
const Teacher = model('teacher', teacherSchema);

module.exports = {teacherSchema, Teacher};