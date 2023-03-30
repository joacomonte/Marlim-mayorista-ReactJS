import React from 'react';

export default function MenuTile(props) {
  return (
    <button className='menuTile' style={{ backgroundColor: props.bgcolor }}>
      {props.cell}
    </button>
  );
}
