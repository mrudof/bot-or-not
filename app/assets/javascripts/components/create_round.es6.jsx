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
    }, 5000)
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}
