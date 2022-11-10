const database = require("../Models")
const bcrypt = require("bcrypt");
const Admin = database.admin;

//create Admin
exports.create = async (req, res) => {
    const body = req.body;
      if (!(body.admin_name && body.admin_password && body.admin_email)) {
        return res.status(400).send({ error: "Data not formatted properly" });
      }

      const salt = await bcrypt.genSalt(10);

      body.admin_password = await bcrypt.hash(body.admin_password, salt);

      Admin.create(body)
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message
          });
        });
}

//gat Admin
exports.find = async (req, res) => {

    const body = req.body;
    
    const admin = await Admin.findOne({where: { admin_email: body.admin_email }});

    if(admin){
        const validPassword = await bcrypt.compare(body.admin_password, admin.admin_password);

        if (validPassword) {
            res.status(200).json({ message: "Valid password" });
          } else {
            res.status(400).json({ error: "Invalid Password" });
          }
        } else {
          res.status(401).json({ error: "User does not exist" });
        }
}
