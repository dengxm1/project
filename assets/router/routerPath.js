const paths = {
  modTypes: 'source_code',
  app: {
    root: '/',
    login: '/login',
    loginTest: '/loginTest',
    personMessage: '/personMessage',
    apply: '/apply'
  }
};

let routerPrefix = process.env.APP_PREFIX;
routerPrefix = routerPrefix.substring(0, routerPrefix.length - 1);

const initAppPaths = function(obj) {
  // eslint-disable-next-line no-debugger
  // debugger;
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      initAppPaths(obj[key]);
    } else {
      obj[key] = routerPrefix + obj[key];
    }
  }
};

const initModulesPaths = (obj) => {
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      initModulesPaths(obj[key]);
    }
    if (obj[key].path) {
      obj[key].path = routerPrefix + obj[key].path;
    }
    if (
      obj[key].admin &&
      sessionStorage.getItem('superAdmin') !== '1' &&
      sessionStorage.getItem('menuAdmin') !== '1'
    ) {
      // 管理员菜单控制
      delete obj[key];
    }
  }
};

const initPaths = (obj) => {
  initAppPaths(obj['app']);
  initModulesPaths(obj['modules1']);
};

initPaths(paths);

export default paths;
