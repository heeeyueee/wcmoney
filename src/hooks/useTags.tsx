import { createId } from 'lib/createId';
import { useEffect, useState } from 'react';
import { useUpdate } from 'hooks/useUpdate';


const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' },
            ];
        }
        setTags(localTags);

    }, []); // 组件挂载时执行
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
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
    const addTag = () => {
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    };
    return { tags, setTags, findTag, findTagIndex, editTagContent, deleteTag, addTag };
};

export { useTags };