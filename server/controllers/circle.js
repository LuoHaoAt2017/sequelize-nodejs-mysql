const Circle = require('../models/index').Circle;
module.exports = {
  async search(req, res) {
    res.status(200).send({
      resp: {
        returnData: []
      },
      successful: true
    });
  },
  async update(req, res) {
  },
  async delete(req, res) {
  },
  async create(req, res) {
    try {
      const data = await Circle.create({
        px: req.body.x,
        py: req.body.y,
        radius: req.body.r
      });
      res.status(200).send({
        response: {
          successful: true,
          returnData: data,
        },
      });
    } catch(error) {
      res.status(500).send({
        response: {
          successful: false,
          returnData: null,
          errorMesg: error
        },
      });
    }
  },
}