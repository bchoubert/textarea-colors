import React, { useCallback, useRef, useState } from 'react';

import characterStyles from './styles.css';

const styles = {
  containerStyle: {
    width: '100%',
    padding: '1rem',
    border: '1px solid darkGray',
    borderRadius: '4px',
    boxSizing: 'border-box',
    cursor: 'text',
    font: '400 13.3333px Arial',
    height: 'auto',
  },
  inputStyle: {
    border: '0',
    outline: 'none',
    width: '2rem',
    paddingLeft: '0',
    backgroundColor: 'transparent',
  },
};

const TextAreaCharacter = ({ c, i }) => {
  switch(c) {
    case '\r':
      return (<span className={characterStyles.crCharacter} />);
    default:
      return (<span className={characterStyles.character}>{c}</span>);
  }
}

const DEFAULT_PROPS = {
  rows: 5,
};

// ROWS, ONCHANGE, VALUE, STYLE, 
const TextAreaColors = (initialProps) => {
  const inputRef = useRef(null);

  const props = {
    ...DEFAULT_PROPS,
    ...initialProps,
  }

  const [inputValue, setInputValue] = useState('');
  const onInputValueChange = useCallback(e => {
    props?.onChange?.(v => `${v}${e.target.value}`);
  });

  const giveInputFocus = useCallback(() => inputRef?.current?.focus(), [inputRef]);
  const onInputKeyDown = useCallback(e => {
    switch(e?.keyCode) {
      case 8:
        // Manage backspace
        props?.onChange?.(v => {
          if (!v || v.length < 1) { return ''; }
          return [...v].slice(0, -1).join('');
        });
        break;
      case 13:
        props?.onChange?.(v => {
          return [...v, '\r'].join('');
        });
        break;
    }
  });

  console.log(props.value);

  return (
    <div
      style={{
        ...styles.containerStyle,
        ...(props?.style || {}),
        ...({
          minHeight: `${initialProps.rows || 5}rem`
        })
      }}
      onClick={giveInputFocus}
    >
      {(props.value || '').split('').map((c, i) => <TextAreaCharacter key={`${c}-${i}`} c={c} i={i} />)}
      <input
        ref={inputRef}
        value={inputValue}
        onChange={onInputValueChange}
        style={styles.inputStyle}
        autoComplete="off"
        onKeyDown={onInputKeyDown}
      />
    </div>
  );
};

export default TextAreaColors;
