var value = 10

function setStorageKey(key, value) {
    chrome.storage.sync.set({
        [key]: value,
    })
}

function getStorageKeyValue(key, onGetStorageKeyValue) {
    chrome.storage.sync.get([key], function (result) {
        onGetStorageKeyValue(result.key)
    })
}

var value = 10
setStorageKey('K1', value)

getStorageKeyValue('K1', function (key) {
    alert('Set value: ' + value + ' --- Received value: ' + key)
})