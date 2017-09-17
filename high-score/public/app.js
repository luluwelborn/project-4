var myGames = new Firebase('https://high-score-app-3c45c.firebaseapp.com/');
var database = firebase.database();

// ------ SAVE GAME ------
function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var gameName = document.getElementById('gameName').value.trim();
        if (gameName.length > 0) {
            saveToFB(gameName);
        }
        document.getElementById('gameName').value = '';
        return false;
    }
};
 
// ------ SAVE GAME TO DB ------
function saveToFB(gameName) {
    myGames.push({
        name: gameName
    });
};

function refreshUI(list) {
    var list = '';
    for (var i = 0; i < list.length; i++) {
        list += '<li data-key="' + list[i].key + '">' + list[i].name + ' [' + genLinks(list[i].key, list[i].name) + ']</li>';
    };
    document.getElementById('myGames').innerHTML = list;
};

function genLinks(key, gmName) {
    var links = '';
    links += '<a href="javascript:edit(\'' + key + '\',\'' + gmName + '\')">Edit</a> | ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + gmName + '\')">Delete</a>';
    return links;
};

// ------ EDIT GAME ------
function edit(key, gmName) {
    var gameName = prompt("Update the game name", gmName);
    if (gameName && gameName.length > 0) {
        // build the FB endpoint to the item in games list
        var updateGameRef = buildEndPoint(key);
        updateGameRef.update({
            name: gameName
        });
    }
}
 
// ------ SAVE GAME ------
function del(key, gmName) {
    var response = confirm("Are certain about removing \"" + gmName + "\" from the list?");
    if (response == true) {
        // endpoint to the item in games list
        var deleteGameRef = buildEndPoint(key);
        deleteGameRef.remove();
    }
}
 
function buildEndPoint (key) {
	return new Firebase('https://high-score-app-3c45c.firebaseapp.com/' + key);
}
 
// this will get fired on inital load as well as when ever there is a change in the data
myGames.on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(list);
});