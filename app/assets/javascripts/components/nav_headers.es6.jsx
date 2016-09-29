class NavHeaders extends React.Component {
   constructor() {
    super();
    this.state = {
      cardShow: false,
      // boardShow: false,
      rulesShow: false,
      gameStage: ""
    }
    this.clickCard = this.clickCard.bind(this)
    // this.clickBoard = this.clickBoard.bind(this)
    this.clickRules = this.clickRules.bind(this)
    // this.updateGameStage = this.updateGameStage.bind(this)
  }

  clickCard() {
    this.setState({cardShow: !this.state.cardShow})
  }

  // clickBoard() {
  //   this.setState({boardShow: !this.state.boardShow})
  // }

  clickRules() {
    this.setState({rulesShow: !this.state.rulesShow})
  }


  render () {
    const card = this.state.cardShow
    ? <Character currentUser={this.props.currentUser} users={this.props.gameUsers} />
    : <div className="btn-group" role="group">
         <button type="button" className="btn btn-info btn-block">
           <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> See Card
         </button>
       </div>

    const rules = this.state.rulesShow
    ? <Rules />
    : <div className="btn-group" role="group">
        <button type="button" className="btn btn-info btn-block">
          <span className="glyphicon glyphicon-book" aria-hidden="true"></span> See Rules
        </button>
      </div>

    return (
      <div className="container-fluid">


        <div className="btn-group btn-group-justified" role="group" aria-label="...">
          <span onClick={this.clickCard}>{card}</span>
          {/*<span onClick={this.clickBoard}>{board}</span>*/}
          <span onClick={this.clickRules}>{rules}</span>
        </div>

        <br/>
        <br/>
      </div>
      )
  }
}

