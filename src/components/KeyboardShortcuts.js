import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
const KeyboardShortcuts = () => {
  const [readShortcuts, setReadShortcuts] = useState();
  useEffect(() => {
    let cookies = document.cookie;
    cookies = cookies.split('; ').reduce((acc, i) => {
      let [key, value] = i.split('=').map(j => j.trim());
      acc[key] = value;
      return acc;
    }, {});
    if (cookies.readShortcuts) {
      setReadShortcuts(true);
    } else setReadShortcuts(false);
  }, []);

  if (readShortcuts === false)
    return ReactDOM.createPortal(
      <div>
        <div aria-hidden="false">
          <div id="keyboard-shortcuts" tabIndex="-1">
            <div className="backdrop"></div>
            <div className="layer">d</div>
          </div>
        </div>
      </div>,
      document.body,
    );
  return null;
};

export default KeyboardShortcuts;
