class Board extends React.Component {
  constructor () {
    super ()
    this.state = {
      boardDisplay: []
    }
  }
  componentWillMount() {
    gameID = this.props.currentGame.id
    var that = this
    var myBoardTimer = setInterval(() => {
      if (that.props.update) {
        $.ajax({
            url: `/games/${gameID}/update_board`,
            method: 'get'
          }).done((response) => {
            that.setState({
              boardDisplay: response
            })
          }.bind(this))
        } else {
          clearInterval(myBoardTimer);
        }
      }, 2000)
  }



  // <h1>Board</h1>
  // <p>Quests created: {this.props.countQuests} out of 5 </p>
  // <p>Round count: {this.props.currentRound.round_number} out of 5 </p>
  //
  //
  // <ul>
  // {
  //   this.state.rounds.map((user ,i) => {
  //     if (user.good === false && this.props.currentUser.id != user.id) {
  //       return (<li key={i}>{user.name}</li>)
  //     }
  //   })
  // }
  // </ul>


  render () {
    return(
      <div>
      <h2> Round outcome </h2>
      <ul>
      {
        this.state.boardDisplay.map((round,i) => {
            return ( <li key={i}>Round {i+1}: {round}</li>)
        })
      }
      </ul>
      <p>Click to hide!</p>
      </div>
    )
  }
}
