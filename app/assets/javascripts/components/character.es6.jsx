class Character extends React.Component {
  render () {
    // console.log("this.props for Character are ", this.props)
    // console.log("this.props.currentUser.good for Character is ", this.props.currentUser.good)
    // replace isGood with current_user.good

    const isGood = this.props.currentUser.good

    let characterCard
    if (isGood) {
      characterCard = <GoodCard />
    } else {
      characterCard = <EvilCard />
    }

    return(
      <div className="jumbotron">
        <h1>{this.props.currentUser.name}</h1>
        {characterCard}
        <div className="btn-group">
          <button type="button" className="btn btn-success">OK</button>
        </div>

      </div>
    )
  }
}
