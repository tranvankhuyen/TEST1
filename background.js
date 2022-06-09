let check1



setInterval(() => {
    chrome.storage.sync.get(null, function(data) {
        // let test = data.timeCounter;
        console.log(data);
        check1 = data.check1
    })
    setTimeout(() => {
        if(check1 >= 1 && check1 !== undefined) {
            check1++;
            chrome.storage.sync.set({check1: check1})
        }
        if(check1 >= 10) {
            chrome.storage.sync.clear();
        }
    }, 10)

    
}, 1010)

