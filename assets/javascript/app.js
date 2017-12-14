// Initialize Firebase
var config = {
    apiKey: "AIzaSyDOq0aCQoo_1XoIAVmIxuKd22FY_Jv5H0w",
    authDomain: "week-7-hw-9e625.firebaseapp.com",
    databaseURL: "https://week-7-hw-9e625.firebaseio.com",
    projectId: "week-7-hw-9e625",
    storageBucket: "week-7-hw-9e625.appspot.com",
    messagingSenderId: "545358079138"
};
firebase.initializeApp(config);

var name = "";
var destination = "";
var time = 0;
var frequency = 0;

$("#addTrain").on("click", function() {
    name = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    time = $("#timeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
});