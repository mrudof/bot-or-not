class EvilCard extends React.Component {

  render () {
    showPic = <img src={`/${this.props.currentUser.character}.jpg`} className="img-responsive" />
    showName = <p> You are {this.props.currentUser.character}!</p>
    return(
      <div>
        {showPic}
        {showName} <h2>secretly a robot.</h2>
        <p> and so is.. </p>
        <ul>
        {
          this.props.users.map((user ,i) => {
            if (user.good === false && this.props.currentUser.id != user.id) {
              return (<li key={i}>{user.name}</li>)
            }
          })
        }


        </ul>
      </div>
    )
  }
}
