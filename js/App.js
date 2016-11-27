import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ToolBar from './components/ToolBar';
import { userPropType } from './common-prop-types';
import * as actions from './action-creators';

class App extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  _loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', this.props.dataUrl);

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          let data = JSON.parse(xhr.response);
          this.props.onDataLoaded(data);
        } catch (err) {
          console.error('JSON.parse error', err);
        }
      }
    }

    xhr.onerror = () => {
      console.error('Data loading error');
    }

    xhr.send();
  }

  render() {
    return (
      <div className="container app">
        <SearchBar onSearch={this.props.onSearch} />
        <ToolBar onSort={this.props.sortData} />
        <UserList users={this.props.data} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(userPropType),
  onDataLoaded: PropTypes.func,
  onSearch: PropTypes.func,
  sortData: PropTypes.func,
  dataUrl: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDataLoaded: (data) => {
      dispatch(actions.updateData(data));
    },
    onSearch: (query) => {
      dispatch(actions.searchByName(query));
    },
    sortData: (key, order) => {
      dispatch(actions.sortBy(key, order));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
