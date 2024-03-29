
const mongoose = require('mongoose');
const { Schema } = mongoose;

// const employeeSchema = new Schema({
//     name: { type: String, required: true},
//     position: { type: String, required: true },
//     office: { type: String, required: true },
//     salary: { type: Number, required: true}
// });

const employeeSchema = new Schema({
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});


module.exports = mongoose.model('Employee', employeeSchema);