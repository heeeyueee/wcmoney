import Layout from '../components/Layout';
import React from 'react';
import { useTags } from 'useTags';

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <h2>标签页面</h2>
      <ol>
        {tags.map(tag =>
          <li key={tag}>{tag}</li>
        )}
      </ol>
    </Layout>
  );
}

export default Tags;
