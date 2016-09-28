class EvilCard extends React.Component {

  render () {
    showName = <p> You are {this.props.currentUser.character}!</p>
    return(
      <div>
        <h2>... is EVIL!!</h2>
        <p> and so is.. </p>
        <ul>
        {
          this.props.users.map((user ,i) => {
            if (user.good === false && this.props.currentUser.id != user.id) {
              return (<li key={i}>{user.name}</li>)
            }
          })
        }
        {showName}
        </ul>
      </div>
    )
  }
}
