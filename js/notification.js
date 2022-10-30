// Уведомления

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

function callAlert(){
    function alertDismissed() {
        alert("Close alert");
    }
    
    navigator.notification.alert(
        'Тестовый alert!',  // message
        alertDismissed,     // callback
        'Заголовок',        // title
        'ОК'                // buttonName
    );
    navigator.notification.beep(1);
}

