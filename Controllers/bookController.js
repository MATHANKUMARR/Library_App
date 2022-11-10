const database = require("../Models")
const Book = database.book;

//create Book
exports.createBook = async (req, res) => {
    const body = req.body;
    await Book.create(body)
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

//get All Books
exports.findAllBooks = async (req, res) => {

    await Book.findAll()
    .then( data => {
      res.status(200).json(data);
    }).catch( err => {
      res.status(401).json(err);
    })
}

//get One Book
exports.findOneBook = async (req, res) => {

  const book_id = req.params.id;

  await Book.findOne({where: { book_id: book_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}

//Update Book
exports.updateBook = async (req, res) => {

  const book_id = req.params.id;

  await Book.update(req.body,{where: { book_id: book_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}

//Remove Book
exports.deleteBook = async (req, res) => {

  const book_id = req.params.id;

  await Book.destroy({where: {book_id : book_id }})
  .then( data => {
    res.status(200).json(data);
  }).catch( err => {
    res.status(401).json(err);
  });
}