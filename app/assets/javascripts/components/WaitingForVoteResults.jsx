class WaitingForVoteResults extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: [],
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
      }, 1000);
  }
  render () {
    let toShow 
    if (this.state.done === true) {
      toShow =
      <div>
        <h5>Here are the vote results:</h5>
        <VoteResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.state.members} currentUser={this.props.currentUser} users={this.props.users}/>
      </div>
    } else {
      toShow =
      <p> waiting for quest results </p>

    }
    return (
      <div>
        {toShow}
      </div>

    )
  }
}
