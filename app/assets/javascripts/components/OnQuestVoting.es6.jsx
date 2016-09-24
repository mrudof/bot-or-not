class OnQuestVoting extends React.Component {
  constructor(){
    super()
    this.state = {
      members: []
    }
  }

  handleSubmit(event){
      event.preventDefault;
      $.ajax({})
  }

  render(){
    return(
      <h2>Time to succeed or fail this quest</h2>
      <form onSubmit={this.handleSubmit}>
        <label for="succeed">Succeed</label>
          <input type="subit" value="Succeed" name="vote"/>
        <label for="fail">Fail</label>
          <input type="submit" value="Fail" name="vote"/>
      </form>
    )
  }
}
