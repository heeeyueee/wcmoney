import { createId } from 'lib/createId';
import { useState } from 'react';

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
  ];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag =(id:number)=>tags.filter(tag=>tag.id===id)[0]
    return { tags, setTags, findTag};
};

export { useTags };