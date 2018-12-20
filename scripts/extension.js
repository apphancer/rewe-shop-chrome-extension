document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('status').textContent = "Extension loaded";
    var button = document.getElementById('changelinks');
    button.addEventListener('click', function () {
        $('#status').html('Please wait while basket gets emptied...');

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: 'emptyBasket'}, function (response) {
                $('#status').html(response.data);
            });
        });
    });
});