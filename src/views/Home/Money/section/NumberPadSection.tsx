import styled from 'styled-components';
import React, { useState } from 'react';

import generateOutput from 'common/generateOutput';

const Wrapper = styled.section`
  position:relative;
 
  .money{
    position: absolute;
    top: -96px;
    right: 32px;
    font-weight: 800;
    font-size: 16px;
  }
  > section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -38px;
   > button{
   background-color:#f2f3f5;
   font-weight: 400;
   font-size: 18px;
   margin-right: 0px;
   width: 23%;
   height: 40px;
   //消除button的默认样式
   border: none;  //去除边框
   outline: none;    //消除默认点击蓝色边框效果
   position:relative
     &.today{
      background-color:#f0aa9f;
     }
     &.complete{
      width: calc(42% + 14px);
      background-color:#ffda44;
     }
   }
  }
`;

type Props = {
  amount: number,
  onChangeAmount: (amount: number) => void,
  onSubmit?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
    props.onChangeAmount(parseFloat(output))
  };
  const getButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLBaseElement).textContent;
    if (text === null) return;
    if (text === '完成') {
      if (props.onSubmit) {
        props.onSubmit();
      }
    }
    setOutput(generateOutput(text, output))
  };

  return (
    <Wrapper>
      <div className="money">{output}</div>
      <section onClick={getButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="today">清零</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>0</button>
        <button>删除</button>
        <button className="complete">
          {
            output.indexOf("+") >= 0 || output.indexOf("-") >= 0 ? "=" : "完成"
          }
        </button>
      </section>
    </Wrapper>
  );
};

export { NumberPadSection };