const router = require("express").Router();
const {Wallets} = require("../models");

const APIENTRY = "/api"

router.post(APIENTRY + "/add/user", async (req, res)=>{
  const {address} = req.body;
  if (address) {
    const w = await Wallets.find({address})
    if (w) {
      if (w.length===0) {
        const wallet = new Wallets({ address });
        await wallet.save();
      }
      return res.send({status:'ok'});
    }
  }
  res.send({status:'fail'});
});

module.exports = router;
