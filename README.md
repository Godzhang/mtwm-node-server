mtwm-node-server

#### todo

- [ ] 支持脚本部署或自动化部署

#### 需补充的技术点

- [ ] lerna
- [ ] pnpm

#### 遇到问题

- 用 pm2 启动后，无法访问
  - 使用 netstat -ntlp 查看监听端口，有没有对应端口
  - 解决方法：执行 ps -ef|grep pm2 找到 pm2 进程，kill [id] 杀死进程，再重启

#### 提交规范

- Header
  - type
  - scope
  - subject - 改动描述
- Body - 详细描述，改动动机 + 改动前后对比
- Footer
  - BREAKING CHANGE
  - Closes

###### type 类型

|   类型   | 功能 |                描述                |
| :------: | :--: | :--------------------------------: |
|   feat   | 功能 |       新增功能，迭代项目需求       |
|   fix    | 修复 |   修复缺陷，修复上一版本存在问题   |
|   docs   | 文档 |   更新文档，仅修改文档不修改代码   |
|  style   | 样式 |      变动格式，不影响代码逻辑      |
| refactor | 重构 |  重构代码，非新增功能也非修复缺陷  |
|   perf   | 性能 |     优化性能，提高代码执行性能     |
|   test   | 测试 |   新增测试，追加测试用例验证代码   |
|  build   | 构建 |  更新构建，改动构建工具或外部依赖  |
|    ci    | 脚本 |  更新脚本，改动 CI 或执行脚本配置  |
|  chore   | 事务 | 变动事务，改动其他不影响代码的事务 |
|  revert  | 回滚 |     回滚版本，撤销某次代码提交     |
|  merge   | 合并 |  合并分支，合并分支代码到其他分支  |
|   sync   | 同步 |  同步分支，同步分支代码到其他分支  |
|   impr   | 改进 |     改进功能，升级当前功能模块     |

#### mysql 信息

- 查看密码 cat /etc/mysql/debian.cnf
