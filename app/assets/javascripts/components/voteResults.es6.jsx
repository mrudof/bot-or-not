class VoteResults extends React.Component {
  constructor(){
    super()
    this.state = {
      members: [],
      results: true
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
          <QuestVote />
        </div>

      }

      return(
        <div>
          {voteResults}
          <ul>{
            this.state.members.map((member, idx) => {
              <li>member.name</li>
            })
          }</ul>
        </div>
      )
  }
}
