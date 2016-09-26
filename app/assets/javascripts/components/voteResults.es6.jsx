class VoteResults extends React.Component {
  constructor(){
    super()
    this.state = {
      members: [],
      results: "",
      buttonShow: true
    }
    this.handleBadSubmit = this.handleBadSubmit.bind(this)
  }
  componentWillMount() {
    var gameID = this.props.currentGame.id
    //hardcoded this questID
    var questID = 1
    $.ajax({
      method: 'get',
      url: `/quests/${questID}/quest_votes`
    }).done((response) => {
        this.setState({
          members: response
        })
      }.bind(this))

        var falses = 0;
        var membs = this.state.members;
        for (var i=0; i < membs.length; i++) {
          if (membs.passed === false) {
            falses++
          }
        }
        if (falses >= membs.length/2) {
          this.setState({
            results: false
          })
        } else {
          this.setState({
            results: true
          })
        }
  }

  handleBadSubmit(){

      var gameID = this.props.currentGame.id
      $.ajax({
        method: 'get',
        url: `/games/${gameID}/status`,
        data: {
          response: "questVoting"
        }
      })

    this.setState({
      buttonShow: false
    })

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

      let redirect;
        if (this.state.results === true){
          redirect =
          <form onSubmit={this.handleGoodSubmit} >
            <label for="go on quest">Time to quest!</label>
            <input ref="quest" type="submit" value="Go On Quest" name="GoOnQuest"/>
          </form>

        } else {
          if (this.state.buttonShow) {
            redirect =
            <form onSubmit={this.handleBadSubmit}>
              <label for="pick a new team">Pick new people to go on a quest!</label>
              <input ref="quest" type="submit" value="Pick new quest members!" name="NewQuestTeam"/>
              </form>
            } else if (this.state.buttonShow === false){
            redirect =
            <SelectQuest updateGameStage={this.updateGameStage} currentUser={this.props.currentUser} currentGame={this.props.currentGame} currentRound={this.props.currentRound} />
          }
        }

      return(
        <div>
          {voteResults}
          {
	    	    this.state.members.map((user,i) => {
	            return (<TeamVoteResult key={i} data={user}/>)
	          })
	    	  }
        {redirect}
        </div>
      )
  }
}
