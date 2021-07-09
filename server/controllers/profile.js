const Profile = require('../models/index').Profile;
module.exports = {
  search(req, res) {
    res.status(200).send('查询成功');
  },
  update(req, res) {
    res.status(200).send('更新成功');
  },
  delete(req, res) {
    res.status(200).send('删除成功');
  },
  create(req, res) {
    res.status(200).send('创建成功');
  },
}