const { Op } = require('sequelize');
const Schema = require('../models/index').Schema;

module.exports = {
  async search(req, res) {
    // 查询某个应用下的所有表单
    // way1: 先根据 appCode 找到应用，再根据关联关系找到表单。
    // way2: 找到所有含有 appCode 值的表单。
    const appCode = req.query.appCode;
    const schemaCode = req.query.schemaCode;
    if (schemaCode) {
      const target = await Schema.findByPk(schemaCode);
      res.status(200).send({
        data: {
          result: target
        },
        code: 200,
        mesg: '查询成功'
      });
    } else if (appCode) {
      const data = await Schema.findAll({
        where: {
          appCode: {
            [Op.eq]: appCode
          }
        }
      });
      res.status(200).send({
        data: {
          result: data,
          // total: total,
        },
        code: 200
      });
    } else {
      res.status(500).send({
        data: null,
        code: 500,
        error: new Error('表单查询出错')
      });
    }
  },
  async update(req, res) {
    const schemaCode = req.body.schemaCode;
    const target = await Schema.findByPk(schemaCode);
    if (target) {
      target.name = req.body.schemaName;
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
    const schemaCode = req.body.schemaCode;
    const target = await Schema.findByPk(schemaCode);
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
    const name = req.body.schemaName;
    const appCode = req.body.appCode;
    try {
      const data = await Schema.create({
        name: name,
        appCode: appCode
      });
      res.status(200).send({
        data: [data],
        code: 200,
        mesg: '创建表单成功'
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