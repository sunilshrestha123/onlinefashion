import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOflike: 1,
      isToggleOn: true,
      isLoggedIn: false,
      date: new Date().toString()
    };
    console.log('init');
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };
  componentDidMount() {
    //api call
    console.log('component did mount');
  }
  componentWillMount() {
    setInterval(() => {
      this.setState({ date: new Date().toString });
    }, 1000);
    console.log('componentWillMount');
  }
  componentWillUnmount() {
    console.log('umoount');
  }
  render() {
    console.log('Rendering........');
    const { app } = this.props;
    const { isLoggedIn, isToggleOn, date } = this.state;

    return (
      <div>
        <div className={isToggleOn ? 'bg-color-red' : 'bg-color-blue'}>
          i'm Body of my {app}
        </div>
        <div>{date}</div>
        <div onClick={this.handleClick}>{isToggleOn ? 'true' : 'false'}</div>
      </div>
    );
  }
}
export default Home;
