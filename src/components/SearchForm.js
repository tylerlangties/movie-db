import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../actions/searchActions';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class SearchForm extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value }, () => {});
  };

  handleSubmit = event => {
    if (this.state.value !== '') {
      this.props.dispatch(
        fetchSearchResults(this.state.value),
        this.props.history.push('/searchresults')
      );
      event.preventDefault();
    } else {
      alert('Fill search box');
      event.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <FormStyles>
          <form className="field-input" onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Search Movies"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </FormStyles>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error
});

export default connect(mapStateToProps)(withRouter(SearchForm));

const FormStyles = styled.div`
  width: 100%;
  .field-input {
    text-align: center;
    button {
      border-radius: 50px;
    }
    input {
      text-align: left;
      border-radius: 6rem;
      border: 1px solid rgb(160, 160, 160);
      padding: 0.6rem 2rem 0.6rem 1rem;
      max-width: 10rem;
      transition: 0.5s;
      &:focus {
        outline: none;
        border-color: #212121;
        transition: 0.5s;
      }
    }
  }
`;
