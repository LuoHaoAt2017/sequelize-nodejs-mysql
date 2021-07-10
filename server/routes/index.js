const express = require('express');
const router = express.Router();

// const application = require('../controllers/application');
// const schema = require('../controllers/schema');
// const record = require('../controllers/record');
const circle = require('../controllers/circle');
// 再次进行权限验证
router.all('*', function(req, res, next) {
  next();
});

// 认证登录
// router.post('/login', auth.login);
// router.put('/register', auth.register);
// router.post('/password', auth.password);

// 账户信息
// router.put('/profile', profile.create);
// router.delete('/profile', profile.delete);
// router.post('/profile', profile.update);
// router.get('/profile', profile.search);

// 应用 【一个应用中包含多个表单】
// router.put('/application', application.create);
// router.delete('/application', application.delete);
// router.post('/application', application.update);
// router.get('/application', application.search);

// 表单【一个表单中存在多条数据记录】
// router.put('/schema', schema.create);
// router.delete('/schema', schema.delete);
// router.post('/schema', schema.update);
// router.get('/schema', schema.search);

// 记录【一条记录属于某个应用下的某个表单的数据记录】
// 打开一条数据记录的方式【新增，只读，编辑】
// router.put('/record', record.create);
// router.delete('/record', record.delete);
// router.post('/record', record.update);
// router.get('/record', record.search);

router.put('/api/circle', circle.create);
router.delete('/api/circle', circle.delete);
router.post('/api/circle', circle.update);
router.get('/api/circle', circle.query1);

module.exports = router;