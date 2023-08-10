const students = [
    { id: 1,studentName:"Kyler", onTheWay:false, arrived:false, requested:true},
    { id: 2,studentName:"Brenda", onTheWay:false, arrived:false, requested:true},
    { id: 3,studentName:"Sam", onTheWay:false, arrived:false, requested:true},
    { id: 4,studentName:"Jenna", onTheWay:false, arrived:false, requested:true},
    { id: 5,studentName:"Laura", onTheWay:false, arrived:false, requested:true},
    { id: 6,studentName:"Jeremy", onTheWay:false, arrived:false, requested:true},
  ];
  
  const teachers = [
    { id: 1, name: 'Professor Smith' },
    { id: 2, name: 'Professor Johnson' },
  ];
  
  const subjects = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Science' },
  ];
  
  const seedData = {
    students,
    teachers,
    subjects,
  };
  
  module.exports = seedData;
  