import React, { useState } from 'react';
import styled from 'styled-components';

import TopNav from 'components/TopNav';
import { Wrapper } from 'components/Wrapper';



import { TagsSection } from './section/TagsSection';
import { KeyboardSection } from './section/KeyboardSection';
import { useRecords } from 'hooks/useRecords';
import { CategorySection } from './section/CategorySection';
import Layout from 'components/Layout';


const Main = styled.div`
  background-color:#fafbf6;
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar{ 
    display: none;
  }
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[], // 标签
  note: '',  // 备注
  createdAt: new Date().toISOString(), //日期
  category: '-' as Category, // 收入/支出
  amount: 0  // 总和
};
const Money: React.FC = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const onSubmit = () => {
    addRecord(selected);

    // window.location.reload();

  };

  return (
    <Layout name="明细">
      <Wrapper>
        <TopNav name="back">
          <CategorySection value={selected.category}
            onChange={(category) => { onChange({ category }); }}
          />
        </TopNav>
        <Main>
          <TagsSection value={selected.tagIds}
            molds={selected.category}
            onChange={(tagIds) => { onChange({ tagIds }); }}
          />
        </Main>
        <KeyboardSection note={selected.note} amount={selected.amount}
          createdAt={selected.createdAt}
          onChangeNote={(note) => { onChange({ note }); }}
          onChangeDate={(createdAt) => { onChange({ createdAt }); }}
          onChangeAmount={(amount) => { onChange({ amount }); }}
          onSubmit={() => { onSubmit(); }}
        />
      </Wrapper>
    </Layout >
  );
};

export default Money;