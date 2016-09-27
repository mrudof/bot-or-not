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
    // console.log(this.state.votes)
    // let rejectedQuest = 0;
    // const gameVotes = this.state.votes;
    // for (var i=0; i < gameVotes.length; i++) {
    //   // we need to find which users voted to reject the quest members
    //   if (gameVotes.passed === false) {
    //     rejectedQuest++
    //   }
    // }
    // if (rejectedQuest >= gameVotes.length/2) {
    //   this.setState({
    //     results: false
    //   })
    // } else {
    //   this.setState({
    //     results: true
    //   })
    // }

  //   <ul>{
  //   this.state.members.map((user,i) => {
  //     return (
  //      <li>user.quest_id</li>
  //     )
  //   })
  // }</ul>

  render(){
      let voteResults;
      if (this.state.passed === true){
        voteResults =
          <div>
            <h2>The proposed quest has been approved!!</h2>
            <OnQuestVoting currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.state.members} currentUser={this.props.currentUser} users={this.props.users}/>
          </div>
      } else if (this.state.passed === false){
        voteResults =
        <div>
          <h2>The proposed quest has been rejected!</h2>
          <SelectQuestForm currentQuest={this.props.currentQuest} currentUser={this.props.currentUser} />
        </div>
      }

      return(
        <div>
          {voteResults}
          <ul>
          {
            this.state.votes.map((vote ,i) => {

              return (<QuestVoteMember key={i} data={vote} />)

            })
          }
          </ul>
        </div>
      )
  }
}
