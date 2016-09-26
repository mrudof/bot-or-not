class VoteResults extends React.Component {
  constructor(){
    super()
    this.state = {
      results: "",
      votes: []
    }
  }
  componentWillMount() {
    const gameID = this.props.currentGame.id
    //hardcoded this questID
    var questID = 1
    $.ajax({
      method: 'get',
      url: `/quests/${questID}/quest_votes`
    }).done((response) => {
        this.setState({
          votes: response
        })
    }.bind(this))

    console.log(this.state.votes)

    let rejectedQuest = 0;
    const gameUsers = this.props.gameUsers;
    for (var i=0; i < gameUsers.length; i++) {
      // we need to find which users voted to reject the quest members
      if (gameUsers.passed === false) {
        rejectedQuest++
      }
    }
    if (rejectedQuest >= gameUsers.length/2) {
      this.setState({
        results: false
      })
    } else {
      this.setState({
        results: true
      })
    }
  }



  render(){
      let voteResults;
      if (this.state.results === true){
        voteResults =
          <div>
            <h2>The proposed quest has been approved!!</h2>
          </div>

      } else {
        voteResults =
        <div>
          <h2>The proposed quest has been rejected!</h2>
          {/* <QuestVote /> */}
        </div>

      }

      return(
        <div>
          {voteResults}
          <ul>{
	    	  this.state.members.map((user,i) => {
	          return (
	           <li>user.quest_id</li>
	          )
	        })
	    	}</ul>
        </div>
      )
  }
}
