
let x;
chrome.storage.sync.set({TEST: 5})

chrome.storage.sync.get(['TEST'], function(result) {
    console.log(result)
})



