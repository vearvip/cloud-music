import React, { memo } from 'react'
import { GlobalStyle } from './style';
import { IconStyle } from './assets/icons/iconfont';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { Provider } from 'react-redux'
import store from './store/index'



export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <IconStyle></IconStyle>

        <GlobalStyle></GlobalStyle>

        {
          renderRoutes(routes)
        }
      </HashRouter>
    </Provider>
  )
})
