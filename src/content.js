// const OPTION_KEYCODE = 18;
const LAST_TAB_KEYCODE = 57;
const NUMBER_KEYCODES = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8
};

window.addEventListener("keydown", e => {
  const { keyCode } = e;
  if (!e.altKey) {
    return null;
  }
  if (keyCode === LAST_TAB_KEYCODE) {
    chrome.runtime.sendMessage({ message: "CHANGE_TAB", payload: "last" });
    return null;
  }
  if (NUMBER_KEYCODES[keyCode]) {
    chrome.runtime.sendMessage({
      message: "CHANGE_TAB",
      payload: NUMBER_KEYCODES[keyCode]
    });
  }
});

