import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from "react"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import styled from 'styled-components';

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export interface ScrollProps {
  direction?: 'vertical' | 'horizental'
  refresh?: boolean
  onScroll?: Function
  pullUp?: Function
  pullDown?: Function
  pullUpLoading?: boolean
  pullDownLoading?: boolean
  bounceTop?: boolean // 是否支持向上吸顶
  bounceBottom?: boolean // 是否支持向上吸顶
  click?: boolean
  children?: any
  className?: string
};

const Scroll = forwardRef((props: ScrollProps, ref) => {
  const [bScroll, setBScroll] = useState();

  const scrollContaninerRef = useRef();

  const { 
    direction = 'vertical', 
    click = true,
    refresh = true,
    bounceTop = true,
    bounceBottom = true,
    pullUp = null,
    pullDown = null,
    onScroll = null,
    pullUpLoading = false,
    pullDownLoading = false,
  } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current || '', {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', (scroll: Function) => {
      onScroll(scroll);
    })
    return () => {
      bScroll.off('scroll');
    }
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    }
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos: {
      x: number
      y: number
    }) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off('touchEnd');
    }
  }, [pullDown, bScroll]);


  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));


  return (
    <ScrollContainer ref={scrollContaninerRef as any}>
      {props.children}
    </ScrollContainer>
  );
})


export default Scroll;