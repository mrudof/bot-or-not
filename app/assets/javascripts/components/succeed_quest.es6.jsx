class SucceedQuest extends React.Component {
  constructor(){
    super()
    this.state ={
      results: "",
      votes: [],
      endgame: ""
    }
  }


  componentWillMount(){
    const gameID = this.props.currentGame.id

    var questID = this.props.currentQuest.id
    var questMemberID = this.props.currentUser.id
    $.ajax({
      method: 'get',
      url: `/quests/${questID}/quest_memebers/${questMemberID}`
    }).done((response) => {
      this.setState({
        votes: response
      })
    }.bind(this)) 

    let failedQuest = 0;
    const questMembers = this.props.questMembers;
    for (var i=0; i < questMembers.length; i++){
        if (questMembers.succeeded === false) {
        failedQuest++
      }
    }
    if (failedQuest > 0){
      this.setState({
        results: false
      })
    } else {
      this.setState({
        results: true
      })
    }

    let questLimit = 0
    let currentRound = this.props.currentRound;
      if (currentRound.id === 5) {
        questLimit++
      }
    if (questLimit === 1){
      this.setState({
        endgame: true
      })
    } else {
      this.setState({
        endgame: false
      })
    }
  }



  render () {
    let questResults
      if (this.state.endgame === false){
        if (this.state.results === false){
          questResults =
          <div>
            <h2>The quest has failed!!</h2>
            {/* render next component! */}
          </div>
        } else {
          questResults =
          <div>
            <h2>The quest has succeeded!!</h2>
          </div>
        }
      }
    return(
      <div>
        {questResults}
      </div>
    )
  }
}
