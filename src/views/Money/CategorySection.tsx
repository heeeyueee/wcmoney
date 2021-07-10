import React, { useState } from "react";
import styled from "styled-components"
const Wrapper = styled.section`
font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = { '-': '支出', '+': '收入' }
    //const [categoryList] = useState<('+' | '-')[]>(['-', '+'])//类型值收缩到只有+和-
    //优化
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-', '+'])
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c => <li className={props.value === c ? 'selected' : ''} key={c} onClick={() => { props.onChange(c) }}>{categoryMap[c]}</li>)}
            </ul>
        </Wrapper>
    )
}
export { CategorySection }