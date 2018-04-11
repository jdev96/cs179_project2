
function save(){
    var pacing = document.getElementById('pacing');
    var enunciation = document.getElementById('enunciation');
    var gestures = document.getElementById('gestures');
    var eye = document.getElementById('eye');
    var volume = document.getElementById('volume');
    var flow = document.getElementById('flow');

    var pacing1 = document.getElementById('pacing1');
    var enunciation1 = document.getElementById('enunciation1');
    var gestures1 = document.getElementById('gestures1');
    var eye1 = document.getElementById('eye1');
    var volume1 = document.getElementById('volume1');
    var flow1 = document.getElementById('flow1');

    // console.log(checkbox);

    localStorage.setItem('pacing', pacing.checked);
    localStorage.setItem('enunciation', enunciation.checked);
    localStorage.setItem('gestures', gestures.checked);
    localStorage.setItem('eye', eye.checked);
    localStorage.setItem('volume', volume.checked);
    localStorage.setItem('flow', flow.checked);

    localStorage.setItem('pacing1', pacing1.checked);
    localStorage.setItem('enunciation1', enunciation1.checked);
    localStorage.setItem('gestures1', gestures1.checked);
    localStorage.setItem('eye1', eye1.checked);
    localStorage.setItem('volume1', volume1.checked);
    localStorage.setItem('flow1', flow1.checked);
}
function load(){
    var checked = JSON.parse(localStorage.getItem('pacing'));
    document.getElementById("pacing").checked = checked;
    checked = JSON.parse(localStorage.getItem('enunciation'));
    document.getElementById("enunciation").checked = checked;
    checked = JSON.parse(localStorage.getItem('gestures'));
    document.getElementById("gestures").checked = checked;
    checked = JSON.parse(localStorage.getItem('eye'));
    document.getElementById("eye").checked = checked;
    checked = JSON.parse(localStorage.getItem('volume'));
    document.getElementById("volume").checked = checked;
    checked = JSON.parse(localStorage.getItem('flow'));
    document.getElementById("flow").checked = checked;

    checked = JSON.parse(localStorage.getItem('pacing1'));
    document.getElementById("pacing1").checked = checked;
    checked = JSON.parse(localStorage.getItem('enunciation1'));
    document.getElementById("enunciation1").checked = checked;
    checked = JSON.parse(localStorage.getItem('gestures1'));
    document.getElementById("gestures1").checked = checked;
    checked = JSON.parse(localStorage.getItem('eye1'));
    document.getElementById("eye1").checked = checked;
    checked = JSON.parse(localStorage.getItem('volume1'));
    document.getElementById("volume1").checked = checked;
    checked = JSON.parse(localStorage.getItem('flow1'));
    document.getElementById("flow1").checked = checked;
}

function wis(){
    location.reload();
    localStorage.clear()
}

load();