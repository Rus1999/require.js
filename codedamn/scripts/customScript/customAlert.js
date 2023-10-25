define([''], function(){
    let customAlert = {};

    customAlert.alertMessage = function(arg) {
        alert(arg);
    }

    return customAlert;
});