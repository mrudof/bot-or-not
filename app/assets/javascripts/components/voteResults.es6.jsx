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


                                                // handleSubmit(event) {
                                                //   event.preventDefault()
                                                //   //creates the quest
                                                //   const gameID = this.props.currentGame.id
                                                //   const roundID = this.props.currentRound.id
                                                //   $.ajax({
                                                //     url: `/games/${gameID}/rounds/${roundID}/quests`,
                                                //     method: 'POST'
                                                //   }).done((response) => {
                                                //     this.setState({
                                                //       quest: response
                                                //     })
                                                //   })
                                                //  }
                                                //
                                                // render () {
                                                //   // do we really need to have the create quest button, or can we show the select quest form directly?
                                                //   let showButton
                                                //     if (this.state.quest === "") {
                                                //       showButton =
                                                //       <form onSubmit={this.handleSubmit}>
                                                //         <input value="Go to next " type="submit"/>
                                                //       </form>
                                                //     } else {
                                                //       showButton =
                                                //       <SelectQuestForm updateGameStage={this.props.updateGameStage} currentGame={this.props.currentGame} currentQuest={this.state.quest} numberOnQuest={1} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users}/>
                                                //
                                                //     }
                                                //   return (
                                                //     <div>
                                                //       {showButton}
                                                //     </div>
                                                //     )
                                                // }

  handleQuestRejectedButton(event) {
    event.preventDefault()
    location.reload()
   }

  // handleApproveButton(event) {
  //   event.preventDefault()
  // }

  //ensure that QuestMember's are being created and passed in to the next component
  //ensure that next component is updating the succeeded column after voting whether it succeeds or fails




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

        <form onSubmit={this.handleQuestRejectedButton}>
          <input value="Go back to create quest" type="submit"/>
        </form>

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
