class Game extends React.Component {
  render () {
      return(
      <div className="container-fluid">
        <SelectQuestSplits users={this.props.gameUsers} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} />
        <GameResult currentGame={this.props.currentGame} users={this.props.gameUsers}/>
      </div>
    )
  }
}
