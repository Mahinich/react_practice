function Test2() {
  console.log('render1')
  return(
    <>
        {console.log('render2')}
        <div>
          {/* <button onClick={this.buttonHandler}>Push</button> */}
        </div>
        {/* <div>{this.state.s1}</div> */}
      </>
  )
}

export {Test2};