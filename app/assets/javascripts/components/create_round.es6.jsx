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
    var yourUltimateTimer = setInterval(() => {
      location.reload()
    }, 1000);

  }
  render () {
    return (
      <div>
        <p> you are creating a round here </p>
      </div>

    )
  }
}
