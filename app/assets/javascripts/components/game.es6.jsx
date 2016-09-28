class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      cardShow: false,
      boardShow: false,
      rulesShow: false,
      gameStage: ""
    }
    this.clickCard = this.clickCard.bind(this)
    this.clickBoard = this.clickBoard.bind(this)
    this.clickRules = this.clickRules.bind(this)
    this.updateGameStage = this.updateGameStage.bind(this)
  }
  // componentDidMount() {
  //
  //   var gameID = this.props.currentGame.id
  //   var bigTimer = setInterval(() => {
  //     console.log("I have a game id which is:", gameID)
  //     console.log("The gameStage before ajax is:", this.state.gameStage)
  // 		$.ajax({
  // 			method: 'get',
  // 			url: `/games/${gameID}/status`
  // 		}).done((response) => {
  // 			this.setState({
  // 				gameStage: response
  // 			})}.bind(this))
  //     console.log("I just fired off an ajax and got this gamestage back:", this.state.gameStage)
  //
  //   }, 1000);
  //
	//    }


  clickCard() {
    this.setState({cardShow: !this.state.cardShow})
  }

  clickBoard() {
    this.setState({boardShow: !this.state.boardShow})
  }

  clickRules() {
    this.setState({rulesShow: !this.state.rulesShow})
  }

  updateGameStage(response) {
    this.setState ({
      gameStage: response
    })
  }

  render () {
    console.log("this.props for Game are ", this.props)

    const card = this.state.cardShow
    ? <Character currentUser={this.props.currentUser} users={this.props.gameUsers} />
    : <div className="btn-group" role="group">
         <button type="button" className="btn btn-default">
           <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> See Card
         </button>
       </div>

    const board = this.state.boardShow
    ? <Board currentRound={this.props.currentRound} currentGame={this.props.currentGame} countQuests={this.props.countQuests}/>
    : <div className="btn-group" role="group">
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span> See Board
        </button>
      </div>


    const rules = this.state.rulesShow
    ? <Rules />
    : <div className="btn-group" role="group">
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-book" aria-hidden="true"></span> See Rules
        </button>
      </div>


      // let tree
      // if (this.state.gameStage === "questVoting" ) {
        let tree = <SelectQuestSplits updateGameStage={this.updateGameStage} users={this.props.gameUsers} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} />
      // }
      // else if (this.state.gameStage === "questVoteDone") {
      //   tree = <VoteResults updateGameStage={this.updateGameStage} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} gameUsers={this.props.gameUsers} />
      // }

      return(
      <div>

        <div className="bg-success">
          Your username: {this.props.currentUser.name}<br/>
        </div>
        <div className="bg-danger">
          Game stage: {this.props.gameStage}<br/>
          Game id: {this.props.currentGame.id}<br/>
          Current round: {this.props.currentRound.id}<br/>
          Count rounds: {this.props.countRounds}<br/>
          Count quests: {this.props.countQuests}<br/>
        </div>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <span onClick={this.clickCard}>{card}</span>
          <span onClick={this.clickBoard}>{board}</span>
          <span onClick={this.clickRules}>{rules}</span>
        </div>

        {tree}


      </div>
    )
  }
}
