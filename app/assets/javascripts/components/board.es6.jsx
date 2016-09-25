class Board extends React.Component {
  render () {
    console.log("this.props for Board are ", this.props)
    return(
      <div>
        <h1>Board</h1>
        <p>Quests created: {this.props.countQuests} out of 5 </p>
        <p>Round count: {this.props.currentRound.round_number} out of 5 </p>
        <p>Click to hide!</p>
      </div>
    )
  }
}
