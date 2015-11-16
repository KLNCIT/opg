var myRef = new Firebase('https://incandescent-inferno-7549.firebaseio.com/');

function notify(message, type) {
    $.growl({
        message: message
    }, {
        type: type,
        allow_dismiss: false,
        label: 'Cancel',
        className: 'btn-xs',
        placement: {
            from: 'bottom',
            align: 'center'
        },
        delay: 2500,
        animate: {
            enter: 'animated bounceIn',
            exit: 'animated bounceOut'
        },
        offset: {
            x: 20,
            y: 25
        }
    });
};

function authDataCallback(authData) {
    if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        notify("Login Success","success");
        $.bootstrapGrowl("My message");
    } else {
        console.log("User is logged out");

    }
}
myRef.onAuth(authDataCallback);