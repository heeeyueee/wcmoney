import { createId } from 'lib/createId';
import { useState } from 'react';

const defaultTags = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' },
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id: number) => {
        let result = -1
        for (let index = 0; index < tags.length; index++) {
            if (tags[index].id === id) {
                result = index
                break
            }
            return result
        }
    }
    const editTagContent = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id)
        let cloneTags = JSON.parse(JSON.stringify(tags))
        cloneTags.splice(index, 1, { id: id, name: obj.name })
        setTags(cloneTags)

    }
    const deleteTag = (id: number) => {
        const index = findTagIndex(id)
        let cloneTags = JSON.parse(JSON.stringify(tags))
        cloneTags.splice(index, 1)
        setTags(cloneTags)

    }
    return { tags, setTags, findTag, findTagIndex, editTagContent, deleteTag };
};

export { useTags };