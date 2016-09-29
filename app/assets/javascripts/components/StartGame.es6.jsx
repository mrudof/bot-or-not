class StartGame extends React.Component {
  constructor () {
    super ()
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    var gameID = this.props.game.id
    var that = this
    var myTimer = setInterval(() => {

        $.ajax({
            url: `/games/${gameID}/users`,
            method: 'get'
          }).done((response) => {
            that.setState({
              users: response
            })
          }.bind(this))
      }, 2000);
  }

  render () {
  let showForm
  if (this.props.user.creator && this.state.users.length >= 2) {
    showForm =
    <div class='form-group'>
    <form method="POST" id="start-game-form" action="/games/:game_id/users/update">
      <input type='hidden' name='_method' value='put'/>
      <input type="submit" value="Start game"/>
    </form>
    </div>
  }

    return (
    <div class="row">
      <h5>Current number of players: {this.state.users.length}</h5><br></br>
      {showForm}
    </div>
    )
  }
}
