import React, { Component } from 'react';
import MyContext from './context';
import fetchSWAPI from '../services/api';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    fetchSWAPI()
      .then(
        (planets) => {
          this.setState({
            data: planets,
            isLoading: false,
          })
        }
      )
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      isLoading ? <p>Loading</p> :
        <MyContext.Provider value={{ planets: data }}>
          {this.props.children}
        </MyContext.Provider>
    )
  }
}

export default Provider;
