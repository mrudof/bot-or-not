class WaitingForVoteResults extends React.Component {
  constructor () {
    super ()
    this.state = {
      votes: [],
      done: false
    }
  }

  componentWillMount() {
    var numberOfPlayers = this.props.users.length;
    questID = this.props.currentQuest.id;
    var that = this
    var yourNeighborhoodTimer = setInterval(() => {
      if (that.state.votes.length < numberOfPlayers) {
        $.ajax({
            url: `/quests/${questID}/quest_votes`,
            method: 'get'
          }).done((response) => {
            that.setState({
              votes: response
            })
          }.bind(this))
        } else {
            that.setState({
              done: true
            })
          clearInterval(yourNeighborhoodTimer);
        }
      }, 2000);
  }
  render () {
    let toShow
    if (this.state.done === true) {
      toShow =
      <div>
        <VoteResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
      </div>
    } else {
      toShow =
      <div>
        <br/>
        <p>Waiting for mission results.</p>
      </div>
    }
    return (
      <div>
        {toShow}
      </div>

    )
  }
}
