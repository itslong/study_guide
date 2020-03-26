import React from 'react';


const ListCard = ({ listItem }) => {
    const { id, ...listObj } = listItem;

    return (
        <div id={id}>
            {Object.entries(listObj).map((item, i) => {
                const elem = item[1] !== '' ?
                    <div key={id + i}>
                        {item[1]}
                    </div> : null;

                return elem;
            })}
        </div>
    );
};

export default ListCard;
