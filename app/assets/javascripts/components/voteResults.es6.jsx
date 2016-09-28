class VoteResults extends React.Component {
  constructor(){
    super()
    this.state = {
      votes: [],
      passed: "initialized"
    }
  }
  componentWillMount() {
    const gameID = this.props.currentGame.id
    var questID = this.props.currentQuest.id
      $.ajax({
        method: 'get',
        url: `/quests/${questID}/quest_votes`
      }).done((response) => {
          this.setState({
            votes: response
          })
      }.bind(this))

      $.ajax({
        method: 'get',
        url: `/quests/${questID}/quest_votes/results`
      }).done((response) => {
          this.setState({
            passed: response
          })
      }.bind(this))
    }

  render(){
    let questStart
    if (this.props.members) {
      questStart =
      <div>
        <p>Quest members! Please vote now!!!</p>
        <OnQuestVoting currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
      </div>
    }
    else {
      questStart =
      <p>Waiting for quest members to vote</p>
    }

    let voteResults
    if (this.state.passed === true){
      voteResults =
        <div>
          <h2>The proposed quest has been approved!!</h2>
          {questStart}
        </div>
    } else if (this.state.passed === false){
      voteResults =
      <div>
        <h2>The proposed quest has been rejected!</h2>
        <CountdownTimer secondsRemaining="2" />
      </div>
    }

    return(
      <div>
        <ul>
        {
          this.state.votes.map((vote ,i) => {
            return (<QuestVoteMember key={i} data={vote} />)
          })
        }
        </ul>
        {voteResults}
      </div>
    )
  }
}
