class VoteResults extends React.Component {
  constructor(){
    super()
    this.state = {
      members: [],
      results: ""
    }
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
          results: false
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
