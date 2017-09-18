// THROWING GET ERROR
var myGames = new Firebase('https://high-score-app-3c45c.firebaseapp.com/');


// ------ GET GAME ON PAGE ------
function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // save the data
        var gameName = document.getElementById('gameName').value.trim();
        if (gameName.length > 0) {
            var li = '<li>' + gameName + '</li>';
            document.getElementById('myGames').innerHTML += li;
        }
        document.getElementById('gameName').value = '';
        return false;
    }
}

// // ------ GET - SAVE GAME ------
// function saveToList(event) {
//     if (event.which == 13 || event.keyCode == 13) { // enter key will saves the data
//         var gameName = document.getElementById('gameName').value.trim();
//         if (gameName.length > 0) {
//             saveToFB(gameName);
//         }
//         document.getElementById('gameName').value = '';
//         return false;
//     }
// }
 
// // ------ PUSH - SAVE GAME TO DB ------
// function saveToFB(gameName) {
//     myGames.push({
//         name: gameName
//     });
// };

// function refreshUI(list) {
//     var lis = '';
//     for (var i = 0; i < list.length; i++) {
//         lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
//     };
//     document.getElementById('myGames').innerHTML = lis;
// };

// // goes on load & whenever there's a data change
// myGames.on("value", function(snapshot) {
//     var data = snapshot.val();
//     var list = [];
//     for (var key in data) {
//         if (data.hasOwnProperty(key)) {
//             name = data[key].name ? data[key].name : '';
//             if (name.trim().length > 0) {
//                 list.push({
//                     name: name,
//                     key: key
//                 })
//             }
//         }
//     }
//     // refresh the UI
//     refreshUI(list);
// });