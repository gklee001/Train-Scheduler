$(document).ready(function () {
    console.log("ready");
    var firebaseConfig = {
        apiKey: "AIzaSyAR-jQQNcEkwpK-6aBJKryGzITYOtuwk84",
        authDomain: "train-8e77b.firebaseapp.com",
        databaseURL: "https://train-8e77b.firebaseio.com",
        projectId: "train-8e77b",
        storageBucket: "train-8e77b.appspot.com",
        messagingSenderId: "22939645081",
        appId: "1:22939645081:web:587363528e8b09e049b408",
        measurementId: "G-WNHJHGYPB7"
    };
    firebase.initializeApp(firebaseConfig)
    //jquery submit form

    $("form").on("submit", function (event) {
        console.log($(this).serializeArray())
        event.preventDefault();

        var trainData = $(this).serializeArray()
        console.log(trainData);

    });





});
