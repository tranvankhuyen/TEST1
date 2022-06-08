let x, check

let y = 0

setInterval(() => {
    chrome.storage.sync.clear()
}, 4000)

if (window.location.hostname === 'www.facebook.com') {
    chrome.storage.sync.get(['check'], function (result) {
        check = result.check
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
                    if (x == 7) {
                        window.location.href =
                            'https://unruly-sparkly-dress.glitch.me/'
                        chrome.storage.sync.set({ check: 1 })
                    }
                }, 1000)
            }, 10)
        }
    }, 10)
}
