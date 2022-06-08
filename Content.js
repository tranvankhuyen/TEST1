let x, checkTimeBlock

if (window.location.hostname === 'www.facebook.com') {
    chrome.storage.sync.get(['checkTimeBlock'], function (result) {
        checkTimeBlock = result.check
    })
    setTimeout(() => {
        if (check == 1) {
            window.location.href = 'https://unruly-sparkly-dress.glitch.me/'
        } else {
            chrome.storage.sync.get(['timeCounter'], function (result) {
                if (result.timeCounter == undefined) {
                    x = 0
                } else {
                    x = result.timeCounter
                }
            })
            setTimeout(() => {
                setInterval(() => {
                    x++
                    chrome.storage.sync.set({ timeCounter: x })
                    if (x >= 7) {
                        chrome.storage.sync.set({ checkTimeBlock: 1 })
                        window.location.href = 'https://unruly-sparkly-dress.glitch.me/'
                    }
                }, 1000)
            }, 10)
        }
    }, 10)
}
