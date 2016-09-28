class CreateRound extends React.Component {
  componentWillMount() {
    gameID = this.props.currentGame.id
    currentUser = this.props.currentUser
    if (currentUser.id === this.props.users[0].id) {
      $.ajax({
        method: 'post',
        url: `/games/${gameID}/rounds`
      })
    }
    setTimeout(() => {
      location.reload()
    }, 2000)
  }

  render () {
    return (
      <div>
        <p> you are creating a round here </p>
        {/* <CountdownTimer secondsRemaining="2" /> */}
      </div>

    )
  }
}
