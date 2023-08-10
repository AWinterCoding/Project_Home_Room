const {Schema, Types, model} = require('mongoose');
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
    //I am testing to see if the one to many relationship will hold the homeroom teacher like this.
    //homeroomTeacher: [teacherSchema],
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

Studentlist = [
    {studentName:"Kyler", onTheWay:false, arrived:false, requested:true},
    {studentName:"Brenda", onTheWay:false, arrived:false, requested:true},
    {studentName:"Sam", onTheWay:false, arrived:false, requested:true},
    {studentName:"Jenna", onTheWay:false, arrived:false, requested:true},
    {studentName:"Laura", onTheWay:false, arrived:false, requested:true},
    {studentName:"Jeremy", onTheWay:false, arrived:false, requested:true},
];

Student.find({}).exec().then(async collection =>{
    if(collection.length === 0){
        const results = await Student.insertMany(
            Studentlist
        );
        return console.log('Students Successfully inserted', results);
    }
    return console.log('We have enough test data');
}).catch(err => console.log(err));



const handleError = (err) => console.error(err);

module.exports = Student;