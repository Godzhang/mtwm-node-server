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
