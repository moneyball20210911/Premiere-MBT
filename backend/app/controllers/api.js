const router = require("express").Router();
const {Wallets} = require("../models");
/* const  = db.Wallets; */

const APIENTRY = "/api/"

router.post(APIENTRY + "/add/user", (req, res)=>{
  const {address} = req.body;
  Wallets
    .save({address})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while saving the Address."
      });
    });
  /* console.log(address)
  res.json({status:'ok'}) */
});

module.exports = router;
