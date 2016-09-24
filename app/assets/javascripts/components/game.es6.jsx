class Game extends React.Component {

  render () {
    console.log("this.props for Game are ", this.props)
    return(
      <div>
        <Character currentUser={this.props.currentUser} />
        <Board />
        <Rules />
        {/* <SelectQuest currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} /> */}
        <VoteQuest />
        {/* <SucceedQuest /> */}
        {/* <QuestResults/> */}
        {/* <GameOver /> */}
      </div>
    )
  }
}
