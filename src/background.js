// "default_popup": "index.html"


//<script>
// function myFunction(){
//   document.getElementbyId('window').style.cursor = url('src/assets/cursor/pokeball.png'), auto;
// }
// </script>

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
