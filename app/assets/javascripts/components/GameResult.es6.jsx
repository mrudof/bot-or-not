class GameResult extends React.Component {
  constructor () {
    super ()
    this.state = {
      roundResults: []
    }
  }


  componentWillMount() {
    gameID = this.props.currentGame.id
        $.ajax({
            url: `/games/${gameID}/update_board`,
            method: 'get'
          }).done((response) => {
            this.setState({
              roundResults: response
            })
            var goodCount = 0
            var evilCount = 0
            for (var i=0; i < this.state.roundResults.length; i++) {
              if (this.state.roundResults[i] === "Good Prevails") {
                goodCount++
              } else {
                evilCount++
              }
            }
            if (goodCount >= 3 || evilCount >= 3) {
              $('.hide-at-end').hide()
            }
          }.bind(this))
  }
  render() {
    var robotUsers =
    <ul> { this.props.users.map((user, idx) => {
          if (user.good === false) {
            return(<li className="white_text">{user.name} was {user.character}</li>)
          }
        })}
    </ul>
    var goodCount = 0
    var evilCount = 0
    for (var i=0; i < this.state.roundResults.length; i++) {
      if (this.state.roundResults[i] === "Good Prevails") {
        goodCount++
      } else {
        evilCount++
      }
    }
    var displayVictory
    if (goodCount >= 3) {
      displayVictory =
      <div>
        <h3 className="welcome">The Humans win!</h3>
        <strong className="pink_letters">...unless the Terminator can find who Sarah Connor is!</strong>
        <br/>
        <p className="welcome">The Robots were:</p>
        {robotUsers}
        <a href="/">Play again!</a>
      </div>
    } else if (evilCount >= 3) {
      $('.hide-at-end').hide()
      displayVictory =
      <div className="welcome">
      <h3>THE ROBOTS HAVE WON AND TAKEN OVER THE WORLD!</h3>
      The Robots were: {robotUsers}
      <a href="/"><strong className="pink_letters pink_box">Play again!</strong></a>
      </div>
    }

    return(
      <div>
        {displayVictory}
      </div>
    )
  }
}
