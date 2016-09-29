class QuestVoteMember extends React.Component {
    render(){
      let voteDecision;
      if (this.props.data.passed) {
        voteDecision = <strong>approved</strong>
      } else {
        voteDecision = <strong>rejected</strong>
      }
      return(
        <p>{this.props.data.user.name}: {voteDecision}</p>
      )
    }
  }
