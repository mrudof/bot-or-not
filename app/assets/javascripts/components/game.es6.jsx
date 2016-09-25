class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      cardShow: false,
      boardShow: false,
      rulesShow: false
    }
    this.clickCard = this.clickCard.bind(this)
    this.clickBoard = this.clickBoard.bind(this)
    this.clickRules = this.clickRules.bind(this)
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

    return(
      <div>
        <span onClick={this.clickCard}>{card}</span>
        <span onClick={this.clickBoard}>{board}</span>
        <span onClick={this.clickRules}>{rules}</span>

        <SelectQuest currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} />


        {/* <VoteQuest /> */}

          {/* <SucceedQuest /> */}


            {/* <QuestResults/> */}

              {/* <GameOver /> */}
      </div>
    )
  }
}
