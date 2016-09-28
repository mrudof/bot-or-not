class WaitForGameStart extends React.Component {
  constructor () {
    super ()
    this.state = {
      current_user: []
    }
  }
    componentWillMount() {
      var gameID = this.props.game.id
      var userID = this.props.user.id
      var that = this
      var myTimer = setInterval(() => {
          $.ajax({
              url: `/games/${gameID}/users/${userID}`,
              method: 'get'
            }).done((response) => {
              that.setState({
                current_user: response
              })
            }.bind(this))
        }, 2000);
    }
  render () {
    if (this.state.current_user.order) {
      location.replace("/games")
    }
    return (
      <div></div>
    )
  }
}
