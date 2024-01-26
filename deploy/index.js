import { config, blackList } from "./config.js";
import fs from "fs";
import path from "path";
import ora from "ora";
import shell from "shelljs";
import Client from "ssh2-sftp-client";
import { cwd } from "process";

const spinner = ora("start build and upload").start();

async function executeUpdate() {
  config.map(async (item) => {
    const uploadPath = item.path;
    const sftp = new Client();
    try {
      await sftp.connect({
        host: item.ip,
        port: item.port,
        username: item.username,
        password: item.password,
      });
      spinner.succeed("服务器已连接");

      const exist = await sftp.exists(uploadPath);
      if (exist) {
        // 删除
        await sftp.rmdir(uploadPath, true);
        spinner.succeed("远程目录已删除");
      }
      await sftp.mkdir(uploadPath);
      spinner.succeed("远程目录已创建");

      await sftp.uploadDir(cwd(), uploadPath, {
        filter(path) {
          console.log(path);
          if (
            // TODO: 把 .gitignore 也给忽略了
            path.indexOf(".git") > -1 ||
            path.indexOf("node_modules") > -1 ||
            path.indexOf("deploy") > -1
          ) {
            return false;
          }
          return true;
        },
      });

      spinner.succeed("上传成功");
      sftp.end();
    } catch (err) {
      spinner.fail(`上传失败 ${err.message || ""}`);
      sftp.end();
    }
  });
}

async function runStart() {
  await executeUpdate();
}

runStart();
