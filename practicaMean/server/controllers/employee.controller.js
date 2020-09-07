const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};


employeeCtrl.createEmployee = async (req,res)=>{
    console.log(req.body.name)
    const employee = new Employee(req.body)
    await employee.save()
    res.json({
        'status':'Employee Saved'
    });
}


// employeeCtrl.createEmployee = async (req, res) => {
//     const employee = new Employee({
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary
//     });
//     await employee.save();
//     res.json({status: 'Employee created'});
// };

employeeCtrl.getEmployee = async (req,res) => {
    const employee = await Employee.findById(req.params.id)
    // console.log(req.params)
    res.json(employee)
}

employeeCtrl.editEmployee = async (req,res) => {
    const { id } = req.params
    const employee = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    }
    await Employee.findByIdAndUpdate(id, {$set:employee},{new:true})
    res.json({status: 'employed update'})
}

employeeCtrl.deleteEmployee = async (req,res) => {
    Employee.findByIdAndRemove(req.params.id)
    res.json({status:'employee deleted'})
}

module.exports = employeeCtrl


// db.employee.insert({name:"Pablo",position:'ingeniero',office:'los angeles',salary:4000})