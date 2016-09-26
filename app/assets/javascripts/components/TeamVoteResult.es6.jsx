class TeamVoteResult extends React.Component {
  render(){
    let passedResponse
    if (this.props.data.passed) {
      passedResponse = "Approve"
    } else {
      passedResponse = "Reject"
    }

    return(
      <ul>
        <li>{this.props.data.user.name}</li>
        <li>{passedResponse}</li>
      </ul>
    )
  }
}
