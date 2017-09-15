var myGames = new Firebase('https://high-score-app-3c45c.firebaseapp.com/');

function saveToGame(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var gameName = document.getElementById('gameName').value.trim();
        if (gameName.length > 0) {
        	var li = '<li>' + gameName + '</li>';
            document.getElementById('myGames').innerHTML += li;
        }
        document.getElementById('gameName').value = '';
        return false;
    }
};

function saveToFb(gameName) {
	// save data to fb db from input
	myGames.push({
		name: gameName
	});
};

function refreshUI(list) {
	var list = '';
    for (var i = 0; i < list.length; i++) {
        list += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
    };
    document.getElementById('myGames').innerHTML = list;
};

// fired on load and when there is a data change
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