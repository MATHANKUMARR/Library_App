const database = require("../Models")
const Student = database.student;

//create Student
exports.createStudent = async (req, res) => {
    const body = req.body;
      await Student.create(body)
        .then( data => {
          res.status(200).send(data);
        })
        .catch( err => {
          res.status(500).send({
            message:
              err.message
          });
        });
}

//get All Students
exports.findAllStudents = async (req, res) => {

    await Student.findAll()
    .then( data => {
      res.status(200).json(data);
    }).catch( err => {
      res.status(401).json(err);
    })
}

//get One Student
exports.findOneStudent = async (req, res) => {

  const student_id = req.params.id;

  await Student.findOne({where: { student_id: student_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}

//Update student
exports.updateStudent = async (req, res) => {

  const student_id = req.params.id;

  await Student.update(req.body,{where: { student_id: student_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}

//Remove student
exports.deleteStudent = async (req, res) => {

  const student_id = req.params.id;

  await Student.destroy({where: {student_id : student_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}