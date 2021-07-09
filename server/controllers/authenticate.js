
module.exports = {
  login(req, res) {
    res.status(200).send('登录成功');
  },
  register(req, res) {
    res.status(200).send('注册成功');
  },
  password(req, res) {
    res.status(200).send('密码重置成功');
  },
}