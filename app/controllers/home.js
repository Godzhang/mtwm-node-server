import { mainMenu, subMenu } from "../data/home.js";
import { failRes, successRes } from "../utils/utils.js";

class HomeController {
  menuList(ctx) {
    const data = {
      main: mainMenu,
      sub: subMenu,
    };
    ctx.body = successRes(data);
  }
}

const homeController = new HomeController();

export default homeController;
