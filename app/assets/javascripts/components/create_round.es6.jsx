class CreateRound extends React.Component {
  componentWillMount() {
    gameID = this.props.currentGame.id
    currentUser = this.props.currentUser
    if (currentUser.creator) {
      $.ajax({
        method: 'post',
        url: `/games/${gameID}/rounds`
      })
    }
    // setTimeout(() => {
    //   location.reload()
    // }, 10000)
  }

  render () {
    return (
      <div>
        <CountdownTimer secondsRemaining="9"/>
      </div>
    )
  }
}
