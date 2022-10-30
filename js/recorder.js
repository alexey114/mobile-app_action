//Запись звука

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

function recordAudio() {
    var src = "file:///api_in_action/www/media/myrecording.aac";
    var mediaRec = new Media(src,
        // success callback
        function() {
            alert("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            alert("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}

// function stopRecordAudio(){
//     my_media.stopRecord()
// }