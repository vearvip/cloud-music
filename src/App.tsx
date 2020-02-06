import React, { memo } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签



export default memo(function App() {
  return (
    <HashRouter>
      <IconStyle></IconStyle>

      <GlobalStyle></GlobalStyle>

      {
        renderRoutes(routes)
      }
    </HashRouter>
  )
})
