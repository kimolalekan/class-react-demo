import { Component } from "react";

class Faq extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    loading: true,
  };

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  componentDidUpdate() {}

  // const {loading, count} = this.state;

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading....</div>
        ) : (
          <div>
            <h1>Faq</h1>

            <button onClick={this.handleCount}>Add</button>
            <h3>{this.state.count}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Faq;
