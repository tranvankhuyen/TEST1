let x, check, check1;

if (window.location.hostname === 'www.facebook.com') {
    chrome.storage.sync.get(['check'], function (result) {
        check = result.check
    })
    setTimeout(() => {
        chrome.storage.sync.clear()
    }, 15000)
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
                    if (x > 7) {
                        chrome.storage.sync.set({ check: 1 })
                        chrome.storage.sync.set({ check1: 1 })

                        window.location.href =
                            'https://unruly-sparkly-dress.glitch.me/'
                    } else chrome.storage.sync.set({ timeCounter: x })
                }, 1000)
            }, 10)
        }
    }, 10)
}
