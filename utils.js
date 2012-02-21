Utils = {};

Utils.addLoadEvent = function(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
};

Utils.getRandomObjectMemberValue = function(obj) {
    var objNames = [];
    for (var name in obj) {
        if (obj.hasOwnProperty(name)) {
            objNames.push(name)
        }
    }
    var randomIndex = Math.floor(Math.random()*objNames.length);
    return obj[objNames[randomIndex]];
};