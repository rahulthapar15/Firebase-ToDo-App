// Sync Text area for card and input box

var text = document.getElementById("card_text");
$("#todo").keyup(function () {
    text.value = this.value;
});