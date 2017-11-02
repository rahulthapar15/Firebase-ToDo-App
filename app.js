// Sync Text area for card and input box

var text = document.getElementById("card_text");
$("#todo").keyup(function () {
    text.value = this.value;
});

//Creating FIREBASE reference

var ref = firebase.database().ref();

//Pushing data into firebase
var submitBtn = document.getElementById("submitBtn");
var todo = document.getElementById("todo");
function submitCard(){

    if (!$.trim($("#card_text").val())) {
        // textarea is empty or contains only white-space
        window.alert("Text area cannot be empty!");
    }else{
        var mText = text.value;
        ref.child("List").push().set(mText);
        window.alert(text.value);
        addtoPhone();
        text.value = "";
        todo.value = "";
    }
}

//GET data from Firebase and add to Phone Screen
// Refer to Database -> List
var data_ref = firebase.database().ref().child("List");
function addtoPhone(){

    data_ref.on("child_added",snap =>{

        // Iterate over all records in DB and take the snapshot
        var mStore = snap.val();
        //add to Phone screen
       $("#todo_cards").append("<p>"+mStore+"</p>");
       window.alert(mStore);
    });


}