var deleteButtons = [],
    basketTimer,
    i = 0;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var data = request.data || {};
    deleteButtons = document.querySelectorAll('.basket-overview_list article button.qa-remove');

    if (deleteButtons.length > 0) {
        basketTimer = setInterval(function () {
            emptyBasket(sendResponse);
        }, 500);
    }

    return true; // keeps the message channel open
});

function emptyBasket(sendResponse) {
    var deleteButton = deleteButtons[i++];
    deleteButton.click();

    if (i >= deleteButtons.length) {
        sendResponse({data: 'Basket has been emptied<br>' + i + ' items removed', success: true});
        clearInterval(basketTimer);
    }
};