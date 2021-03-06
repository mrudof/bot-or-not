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
      }, 2000)
  }

  render () {
  let showForm
  if (this.props.user.creator && this.state.users.length >= 2) {
    showForm =
      <form method="POST" id="start-game-form" action="/games/:game_id/users/update">
        <div className='btn-group'>
          <input type='hidden' name='_method' value='put'/>
        </div>
        <button type="submit" className="btn btn-success btn-robot container-fluid">Start game</button>
      </form>
  }
  let usersEntering =
    <ul> {
        this.state.users.map((member, idx) => {
        if (this.props.user.id != member.id) {
        return(<li className="start_game_text white_text pushed_left">{member.name} has joined.</li>)
        }
      })
    }
    </ul>

    return (
    <div>

    <br/>
      <h3 className="welcome current_players_text indented_text">Current number of players: {this.state.users.length}</h3>
      <br/>
      {usersEntering}
      <br/>
      {showForm}
    </div>
    )
  }
}
