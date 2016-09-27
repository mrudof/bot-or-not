class Board extends React.Component {
  constructor () {
    super ()
    this.state = {
      rounds: []
    }
  }
  componentWillMount() {
    gameID = this.props.currentGame.id
    var that = this
    var myBoardTimer = setInterval(() => {
      if (that.props.update) {
        $.ajax({
            url: `/games/${gameID}/rounds`,
            method: 'get'
          }).done((response) => {
            that.setState({
              rounds: response
            })
          }.bind(this))
        } else {
          clearInterval(myBoardTimer);
        }
      }, 1000);
  }
  // <h1>Board</h1>
  // <p>Quests created: {this.props.countQuests} out of 5 </p>
  // <p>Round count: {this.props.currentRound.round_number} out of 5 </p>
  //


  render () {
    console.log("this.props for Board are ", this.props)
    return(
      <div>
      <p>Click to hide!</p>
      </div>
    )
  }
}
