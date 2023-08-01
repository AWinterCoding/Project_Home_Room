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
    requestedStudents:[studentSchema]
}
);
const Teacher = model('teacher', teacherSchema);

module.exports = {teacherSchema, Teacher};