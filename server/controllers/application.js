const Application = require('../models/index').Application;
module.exports = {
  async search(req, res) {
    const appCode = req.query.appCode;
    if (appCode) {
      const target = await Application.findByPk(appCode);
      if (target) {
        const schemas = await target.getSchemas();
        res.status(200).send({
          data: {
            result: target,
            schemas: schemas
          },
          code: 200,
          mesg: '查询成功'
        });
      } else {
        res.status(500).send({
          data: null,
          code: 500,
          error: new Error('查询出错')
        });
      }
    } else {
      const total = await Application.count();
      const data = await Application.findAll();
      res.status(200).send({
        data: {
          result: data,
          total: total,
        },
        code: 200
      });
    }
  },
  async update(req, res) {
    const appCode = req.body.appCode;
    const target = await Application.findByPk(appCode);
    if (target) {
      target.name = req.body.appName;
      target.domain = parseInt(req.body.domain);
      try {
        await target.save();
        res.status(200).send({
          data: [],
          code: 200,
          mesg: new Error('更新成功')
        });
      } catch (error) {
        res.status(500).send({
          data: [],
          code: 500,
          error: new Error('更新失败')
        });
      }
    } else {
      res.status(500).send({
        data: [],
        code: 500,
        error: new Error('待更新的数据在数据库中不存在')
      });
    }
    res.status(200).send('更新成功');
  },
  async delete(req, res) {
    const appCode = req.body.appCode;
    const target = await Application.findByPk(appCode);
    if (target) {
      try {
        await target.destroy();
        res.status(200).send({
          data: [target],
          code: 200,
          mesg: '删除数据成功'
        });
      } catch (error) {
        res.status(500).send({
          data: [],
          code: 500,
          error: new Error('删除数据失败')
        });
      }
    } else {
      res.status(500).send({
        data: [],
        code: 500,
        error: new Error('待删除的数据不存在')
      });
    }
  },
  async create(req, res) {
    const name = req.body.appName;
    const domain = parseInt(req.body.domain);
    console.log('name: ', name);
    console.log('domain: ', domain);
    try {
      const data = await Application.create({
        name: name,
        domain: domain
      });
      res.status(200).send({
        data: [data],
        code: 200,
        mesg: '创建应用成功'
      });
    } catch (error) {
      res.status(500).send({
        data: [],
        code: 500,
        error: error
      });
    }
  },
}