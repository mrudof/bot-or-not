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
      }, 1000);
  }
  render () {
    let toShow
    if (this.state.done === true) {
      // toShow = <VoteResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.state.members} currentUser={this.props.currentUser} users={this.props.users}/>
      // (<QuestVote/>)
      toShow = <p> quest results here </p>
    }
    else {
      toShow = <p>We are waiting for everybody to vote.</p>
    }
    return (
      <div>
        {toShow}
      </div>

    )
  }
}
