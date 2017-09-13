import React, {Component} from 'react'
import GameModel from '../models/game'
// import GameList from '../components/GameList'
// import CreateGameForm from '../components/CreateGameForm'

// class GameContainer extends Component {
//   constructor(){
//     super()
//     this.state = {
//       games: []
//     }
//   }
//   componentDidMount(){
//     this.fetchData()
//   }
//   fetchData(){
//     GameModel.all().then( (res) => {
//       this.setState ({
//         games: res.games
//       })
//     })
//   }

 //  createGame(newBody) {
 //  	let newGame = {
 //  		body: newBody,
 //  		completed: false
 //  	}

 //  	GameModel.create(newGame).then((res) => {
 //    	console.log('created game', res)
 //    	let games = this.state.games
 //    	let newGame = games.push(res)
 //    	this.setState({newGame})
 //  	})
	// }

	// deleteGame(game){
 //  	console.log('deleting game', game)
 //  	GameModel.delete(game).then((res) => {
 //      let games = this.state.games.filter(function(game) {
 //        return game._id !== res._id
 //      });
 //      this.setState({games})
 //  	})
	// }

	// render(){
	//   return (
	//     <div className='gamesContainer'>
	//       <CreateGameForm
	//       createGame={this.createGame.bind(this)} />
	//       <GameList
	//         games={this.state.games}
	//         onDeleteGame={this.deleteGame.bind(this)} />
	//     </div>
 //  	)
	// }
  
}

export default GamesContainer