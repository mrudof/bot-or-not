class QuestVoteMember extends React.Component {
    render(){
      let voteDecision;
      if (this.props.data.passed) {
        voteDecision = <p> approved </p>
      } else {
        voteDecision = <p> rejected </p>
      }
      return(
        <li>{this.props.data.user.name}: {voteDecision}</li>
      )
    }
  }
