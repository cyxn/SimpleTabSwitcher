chrome.commands.onCommand.addListener(function(command) {
  chrome.windows.getCurrent({ populate: true }, window => {
    const commands = command.split(":");
    if (commands[0] !== "change-tab") {
      return null;
    }
    const payload = Number(commands[1]);
    const totalTabsLength = window.tabs.length;
    const nextTabIndex = payload > 5 ? totalTabsLength - (10 - payload) : payload - 1;
    if (nextTabIndex > totalTabsLength - 1) {
      return null;
    }
    chrome.tabs.update(window.tabs[nextTabIndex].id, { active: true });
  });
});
