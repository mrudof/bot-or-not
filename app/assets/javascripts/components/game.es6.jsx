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

  componentDidMount() {
    var gameID = this.props.currentGame.id
		$.ajax({
			method: 'get',
			url: `/games/${gameID}/status`
		}).done((response) => {
			this.setState({
				gameStage: response
			})}.bind(this))
	}

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
    ? <Character currentUser={this.props.currentUser} />
    : <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> See Card
      </button>

    const board = this.state.boardShow
    ? <Board currentRound={this.props.currentRound} countQuests={this.props.countQuests}/>
    : <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-tasks" aria-hidden="true"></span> See Board
      </button>

    const rules = this.state.rulesShow
    ? <Rules />
    : <button type="button" className="btn btn-default btn-lg">
        <span className="glyphicon glyphicon-book" aria-hidden="true"></span> See Rules
      </button>

      let tree
      if (this.state.gameStage === "questVoting" ) {
        tree = <SelectQuestSplits updateGameStage={this.updateGameStage} users={this.props.gameUsers} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} />
      } else if (this.state.gameStage === "questVoteDone") {
        tree = <VoteResults updateGameStage={this.updateGameStage} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} gameUsers={this.props.gameUsers} />
      }
      return(
      <div>
        <span onClick={this.clickCard}>{card}</span>
        <span onClick={this.clickBoard}>{board}</span>
        <span onClick={this.clickRules}>{rules}</span>
        {tree}

        {/* <VoteQuest /> */}
        {/* <SucceedQuest /> */}

        {/* <QuestResults/> */}
        {/* <GameOver /> */}

      </div>
    )
  }
}
