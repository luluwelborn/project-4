import $ from 'jquery'

class GameModel {
  static all(){
    let request = $.ajax({
      url: "http://localhost:3000/",
      method: 'GET'
    })
    return request
  }
}

// static create(game) {
//     let request = $.ajax({
//       url: "http://localhost:3000/",
//       method: 'POST',
//       data: game
//     })
//     return request
// }

// static delete(game){
//     let request = $.ajax({
//       url: "http://localhost:3000/" + game._id,
//       method: 'DELETE'
//     })
//     return request
//   }
// }

export default GameModel