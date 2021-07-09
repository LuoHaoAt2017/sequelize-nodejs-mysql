# sequelize-nodejs-crud-mysql
Sequelize 框架进阶

建模的步骤
理解｜区分｜命名｜表达

建模思想
表达方法

世界是由实体以及这些实体之间的联系构成的。
实体 -> 实例集
属性
关键字
联系 -> 关系表

实体使用属性来刻画
实例使用数值来刻画

实体是实例的形，实例是实体的值。

属性分
单一属性[性别]和复合属性[地址，省市县]
单值属性[身份证号码]和多值属性[爱好]
可空属性和非空属性
导出属性和非导出属性
关键字和非关键字

联系分
一元联系 [部门之间的隶属关系]
二元联系 [读者和读书之间关系]
多元联系

联系是实体和实体之间的关系，不是实例和实例之间的关系
联系的基数
完全参与联系
部分参与联系

空值的处理


角色
实体在联系中的作用



应用
application [appCode]

表单
schema [schemaCode]

实例
object [objectId]