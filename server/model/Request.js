const {Schema, Types, SchemaType} = require('mongoose');
const { studentSchema } = require('./Student');
 const { teacherSchema} = require('./Teacher')


const requestSchema = new Schema(
    {
    teacherID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    studentName: {
        type: Schema.Types.ObjectId,
        ref: 'Student' 
    },
    date: {
        type: Date,
    },
    reason: {
        type: String,
    }
})



