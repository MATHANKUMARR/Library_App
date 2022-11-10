const database = require("../Models")
const List = database.list;

//create Book with student detials
exports.createBookDetails = async (req, res) => {
    const body = req.body;
    await List.create(body)
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

//get All Book Details
exports.findAllBookDetails = async (req, res) => {

    await List.findAll()
    .then( data => {
      res.status(200).json(data);
    }).catch( err => {
      res.status(401).json(err);
    })
}

//Remove One Book Element Details
exports.deleteBookDetails = async (req, res) => {

  const list_id = req.params.id;

  await List.destroy({where: {list_id : list_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}