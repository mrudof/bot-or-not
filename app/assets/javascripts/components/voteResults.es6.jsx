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
        <OnQuestVoting currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
      </div>
    }

    let voteResults
    if (this.state.passed === true){
      voteResults =
        <div>
          {questStart}
        </div>
    } else if (this.state.passed === false){
      voteResults =
      <div>
        <h2>The proposed mission was rejected!</h2>
        <CountdownTimer secondsRemaining="9"/>
      </div>
    }

    return(
      <div>
        <h2>Here are the vote results:</h2>
        {
          this.state.votes.map((vote ,i) => {
            return (<QuestVoteMember key={i} data={vote} />)
          })
        }
        {voteResults}
      </div>
    )
  }
}
