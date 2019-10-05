$(document).ready(function () {
    console.log("ready");

    var firebaseConfig = {
        apiKey: "AIzaSyDk7FfMFN-PloHbu_7oBE6I-wpNFjMaC8M",
        authDomain: "trains-45bf8.firebaseapp.com",
        databaseURL: "https://trains-45bf8.firebaseio.com",
        projectId: "trains-45bf8",
        storageBucket: "trains-45bf8.appspot.com",
        messagingSenderId: "389339760642",
        appId: "1:389339760642:web:2242510474184025b33f1b"
    }
    //initialize firebase------------------------------------->
    firebase.initializeApp(firebaseConfig);

    // var database = firebase.database();
    firebase.database().ref().once('value').then(function (childSnapshot) {
        var items = childSnapshot.val();
        console.log(items)

        //need to add the values into the table detail
        for (var i in items) {
            var freq = parseInt(items[i].frequency)
            var min = moment(items[i].time, "HH:mm" // convert to military time// 
            ).subtract(1, "years");
            console.log(min);
            console.log(min, freq)
            var tRemainder = min % freq;
            console.log(tRemainder)
            var tMinutesTillTrain = freq - tRemainder;
            var nextTrain = moment().add(tMinutesTillTrain, "minutes");
            console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
            var template = '<tr>' +
                '<td>' + items[i].trainName + '</td>' +
                '<td>' + items[i].destination + '</td>' +
                '<td>' + items[i].frequency + '</td>' +
                '<td>' + moment(nextTrain).format("hh:mm") + '</td>' +
                '<td>' + tMinutesTillTrain + '</td>' +
                '</tr>'
            $('table tbody').append(template)

            console.log(min);
        }

    })




    console.log(firebaseConfig);
    $("form").on("submit", function (event) {
        //need to put an event.preventDefault to stop the page from auto refresh
        event.preventDefault();

        var trainData = $(this).serializeArray()
        console.log(trainData);
        //changed the value to match the value in the database
        console.log(trainName);
        var id = Math.floor(Math.random() * 1000);
        //set new value to firebase
        firebase.database().ref().push({
            trainName: trainData[0].value,
            destination: trainData[1].value,
            frequency: trainData[3].value,
            time: trainData[2].value

        })
        $('form').trigger("reset")


    });

});






