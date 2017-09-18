// ------ DROPDOWN GAMES DATA ------
// var select = document.getElementById



// var dropGames = ["Medieval Madness","Attack From Mars", "Buck Hunter"];
// console.log(dropGames);   





// ------ GET GAME ON PAGE ------
// function saveToList(event) {
//     if (event.which == 13 || event.keyCode == 13) { // save the data
//         var gameName = document.getElementById('gameName').value.trim();
//         if (gameName.length > 0) {
//             var li = '<li>' + gameName + '</li>';
//             document.getElementById('myGames').innerHTML += li;
//         }
//         document.getElementById('gameName').value = '';
//         return false;
//     }
// }


var myGames = new Firebase('https://high-score-app-3c45c.firebaseio.com/dashboard/');
 
function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // 13/enter saves
        var gameName = document.getElementById('gameName').value.trim();
        if (gameName.length > 0) {
            saveToFB(gameName);
        }
        document.getElementById('gameName').value = '';
        return false;
    }
};
 
function saveToFB(gameName) {
    // this will save data to Firebase
    myGames.push({
        name: gameName
    });
};
 
function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '  ' + genLinks(list[i].key, list[i].name) + '</li>';
    };
    document.getElementById('myGames').innerHTML = lis;
};
 
function genLinks(key, gmName) {
    var links = '';
    links += '&nbsp; <a href="javascript:edit(\'' + key + '\',\'' + gmName + '\')">edit</a> &nbsp; ';
    links += '<a href="javascript:del(\'' + key + '\',\'' + gmName + '\')">delete</a> <hr>';
    return links;
};
 
function edit(key, gmName) {
    var gameName = prompt("Update the game name", gmName); 
    if (gameName && gameName.length > 0) {
        // build the FB endpoint to the item in games
        var updateGameRef = buildEndPoint(key);
        updateGameRef.update({
            name: gameName
        });
    }
}

function del(key, gmName) {
    var response = confirm("Are certain about removing \"" + gmName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in games
        var deleteGameRef = buildEndPoint(key);
        deleteGameRef.remove();
    }
}
 
function buildEndPoint (key) {
    return new Firebase('https://high-score-app-3c45c.firebaseio.com/dashboard/' + key);
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

// // /////////////////////////////////////////////////////

// TRY TWO FIELDS

// function saveToList(event) {
//     if (event.which == 13 || event.keyCode == 13) { // 13/enter saves data
//         var gameName = document.getElementById('gameName').value.trim();
//         var gameScore = document.getElementById('gameScore').value.trim();
//         if (gameName.length > 0) {
//             saveToFB(gameName, gameScore);
//         }
//         document.getElementById('gameName').value = '';
//         document.getElementById('gameScore').value = '';
//         return false;
//     }
// };
 
// function saveToFB(gameName, gameScore) {
//     // this will save data to Firebase
//     myGames.push({
//         name: gameName,
//         score: gameScore
//     });
// };
 
// function refreshUI(list) {
//     var lis = '';
//     for (var i = 0; i < list.length; i++) {
//         lis += '<li data-key="' + list[i].key + '">' + list[i].name + list[i].score + '  ' + genLinks(list[i].key, list[i].name) + list[i].score + '</li>';
//     };
//     document.getElementById('myGames').innerHTML = lis;
// };

