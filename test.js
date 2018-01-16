const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/testMongoose");
let studentSchema = new mongoose.Schema({
	name: {type:String, required:true},
	id: Number,
	age: Number
});

let student = mongoose.model("Student", studentSchema);
student.create({
	name: "RJ",
	id:123,
	age: 13
});


module.exports = student;