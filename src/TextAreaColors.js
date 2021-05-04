import React, { useCallback, useRef, useState, useMemo, memo } from 'react';

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

const TextAreaCharacter = ({ c, i, getCharacterStyle, value }) => {
  const styles = useMemo(() => {
    return getCharacterStyle?.(c, i, value) || {};
  }, [c, i, value, getCharacterStyle]);

  switch(c) {
    case '\r':
      return (
        <span className={characterStyles.crCharacter} />
      );
    default:
      return (
        <span
          className={characterStyles.character}
          style={styles}
        >
          {c}
        </span>
      );
  }
}

const DEFAULT_PROPS = {
  rows: 5,
};

// ROWS, ONCHANGE, VALUE, STYLE, GETCHARACTERSTYLE
const TextAreaColors = (initialProps) => {
  const inputRef = useRef(null);
  const rootRef = useRef(null);

  const props = {
    ...DEFAULT_PROPS,
    ...initialProps,
  }

  const [inputValue, setInputValue] = useState('');
  const onInputValueChange = useCallback(e => {
    props?.onChange?.(v => `${v}${e.target.value}`);
  });

  const giveInputFocus = useCallback(() => {
    if (!window.getSelection().toString()) {
      inputRef?.current?.focus();
    }
  }, [inputRef]);
  const onInputKeyDown = useCallback(e => {
    console.log(e)
    if (e?.ctrlKey) {
      switch(e?.keyCode) {
        case 65:
          // TODO: Manage select all
      }
    } else {
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
    }
  });

  const valueRendered = useMemo(() => (props.value || '').split('').map((c, i) => (
    <TextAreaCharacter
      key={`${c}-${i}`}
      c={c}
      i={i}
      getCharacterStyle={props.getCharacterStyle}
      value={props.value}
    />
  )), [props.getCharacterStyle, props.value]);

  return (
    <div
      style={{
        ...styles.containerStyle,
        ...(props?.style || {}),
        ...({
          minHeight: `${props.rows}rem`
        })
      }}
      onClick={giveInputFocus}
      role="textbox"
      ref={rootRef}
    >
      {valueRendered}
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

export default memo(TextAreaColors);
