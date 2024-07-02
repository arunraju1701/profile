import React from 'react';

const ListWrapper = ({items, children}) => {
    return <>
        {items.map((data, index) => children(data, index))}
    </>
}

export default ListWrapper;