import React from 'react';
// 多语言
import { ConfigProvider, message } from 'antd';
// import { IntlProvider, addLocaleData } from 'react-intl';
/*
 *引入与navigator.languages[0]所对应的语言；
 *如果没有引入对应的语言，会使用默认的“en”；.\
 *导致FormattedMessage的映射不会成功；
 */
// import zh from 'react-intl/locale-data/zh';
// import en from 'react-intl/locale-data/en';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from 'pages/login/indexTest';

import routerPath from './router/routerPath';
import Bundle from './router/bundle';
import RouterHoc from './components/Hoc/routeFilterHoc';

// addLocaleData([...zh, ...en]);
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: zhCN
    };
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    console.log('fhsdfhsdkhfkdshf');
    return (
      // <ConfigProvider locale={this.state.locale}>
      //   <BrowserRouter>
      //     <Switch>
      //       <Switch>
      //         <Route exact path={routerPath.app.login} component={Login} />
      //       </Switch>
      //     </Switch>
      //   </BrowserRouter>
      // </ConfigProvider>
      <div>
        11111111111
        <Login />
      </div>
    );
  }
}
// export default RouterHoc(App);
export default App;
