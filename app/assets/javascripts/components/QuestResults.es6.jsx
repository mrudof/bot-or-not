class QuestResults extends React.Component {
  constructor(){
    super()
    this.state = {
      questResults: [],
      // currentRound: 0
    }
  }

  componentWillMount() {
    questID = this.props.currentQuest.id
    gameID = this.props.currentGame.id

    $.ajax({
      method: 'get',
      url: `/quests/${questID}/quest_members/results`
    }).done((response) => {
        this.setState({
          questResults: response
        })
    }.bind(this))

    // $.ajax({
    //   method: 'get',
    //   url: `/games/${gameID}/current_round`
    // }).done((response) => {
    //   // debugger
    //   this.setState({
    //     currentRound: response
    //   })
    // }.bind(this))

  }

  render(){
    // function hasMemberFailedQuest(member) {return member.succeeded === false}
    // // debugger
    // const membersThatFailedTheQuest = this.props.members.filter(hasMemberFailedQuest)

    // make it so that later quests with more players requires more fails.
    // i.e., set length to be 2 when over 7 users.
    if  (this.props.countRounds === 4 && this.props.users.length > 6) {
      var maxFails = 1
    }
    else {
      var maxFails = 0
    }
    var numFails = 0
    var numSuccess = 0
    for (i = 0; i < this.state.questResults.length; i++) {
      if (this.state.questResults[i] === true) {
        numSuccess++
      } else if (this.state.questResults[i] === false) {
        numFails++
      }
    }
    let questOutcome
    if (numFails > maxFails){
      questOutcome =
       <div>
         <h2 className="welcome">The mission has failed! The robots won this one.</h2>
         <p className="white_text"> {numFails} / {numFails + numSuccess} failed the mission!</p>
       </div>
    } else {
      questOutcome =
      <div>
        <h2 className="welcome">The humans have prevailed!</h2>
        <p className="white_text"> {numSuccess} / {numFails + numSuccess} members succeeded the mission!</p>
      </div>
    }

    let roundReady =
    // if (this.state.currentRound != 0){
    //   roundReady =
      <CreateRound currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds}/>
    // }

    return(
      <div>
        {questOutcome}
        {roundReady}
      </div>
    )
  }
}
