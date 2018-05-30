import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Label from 'components/Label';
import Button from 'components/Button';
import { setSearchFilterMode } from 'containers/App/actions';
import { searchBy } from '../../stateValues';

class SearchMode extends React.Component { // eslint-disable-line react/prefer-stateless-function

  focusColor = 'button-background-color';

  render() {
    return (
      <div className="inline-block">
        <Label className="searchField-label color-white" value="SEARCH BY" />
        <Button
          className={`mode-button ${this.props.searchByMode == searchBy.title ? this.focusColor : ''}`}
          caption="TITLE"
          onClick={() => this.props.setChangeFilter(searchBy.title)}
        />
        <Button
          className={`mode-button ${this.props.searchByMode == searchBy.genre ? this.focusColor : ''}`}
          caption="GENRE"
          onClick={() => this.props.setChangeFilter(searchBy.genre)}
        />
      </div>
    );
  }
}

SearchMode.propTypes = {
  searchByMode: PropTypes.string,
  setChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  searchByMode: state.getIn(['global', 'searchedBy']),
});

const mapDispatchToProps = (dispatch) => ({
  setChangeFilter: (searchByParam) => dispatch(setSearchFilterMode(searchByParam)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchMode);

