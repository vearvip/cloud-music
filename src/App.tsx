import React, { Component } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { bbq } from './utils/bbq/bbq'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export interface WrapperProps {
  backgroundColor?: string
}

export const Wrapper = styled.section<WrapperProps>`
  padding: 4em;
  background: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'pink'};
`;

export default class App extends Component {
  constructor(props: any) {
    super(props)
    console.log('bbq', bbq)
  }
  render() {
    return (
      <div>
      <IconStyle></IconStyle>
      <i className="iconfont" style={{
        color: 'red'
      }}>&#xe6e9;</i>
      <i className="iconfont">&#xe6fc;</i>
      <hr/>
      <GlobalStyle></GlobalStyle>
        <Wrapper >
          <Title>
            Hello World!
          </Title>
        </Wrapper>
      </div>
    )
  }
}
