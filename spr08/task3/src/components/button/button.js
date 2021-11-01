import React from 'react';
const style = {
    color: 'rgb(18,255,18)',
    backgroundColor: 'transparent',
    border: 0,
    fontFamily: 'Courier',
    fontSize: '33pt'
}

export default function Button(){
    return <button data-testid="element-button" style={style}>Wake up Neo...</button>;
}
