



setInterval(() => {
    chrome.storage.sync.get(null, function(data) {
        // let test = data.timeCounter;
        console.log(data);
    })
    
}, 1000)

