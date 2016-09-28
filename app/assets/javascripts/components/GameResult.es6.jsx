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
          }.bind(this))
  }

  render() {
    return(
      <h3>EVIL HAS WON AND TAKEN OVER THE WORLD!</h3>
    )
  }
}
