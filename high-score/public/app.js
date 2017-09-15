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
}
