class QuestVoteMember extends React.Component {
    render(){
      let voteDecision;
      if (this.props.data.passed) {
        voteDecision = <strong>approved</strong>
      } else {
        voteDecision = <strong>rejected</strong>
      }
      return(
        <p className="white_text">{this.props.data.user.name}: {voteDecision}</p>
      )
    }
  }
