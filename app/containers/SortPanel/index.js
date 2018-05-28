import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Label from 'components/Label';
import Caption from 'components/Caption';
import Button from 'components/Button';
import { sortBy } from '../../stateValues'
import { setSortingMode } from '../App/actions';

class SortPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props); 
        this.focusColor = 'button-background-color';
    }

    render() {
        return (
        <div className='inline-block'>
            <Caption value={ this.props.resultsCount + ' movies found' }/>
            <span className='float-right'>
                <Label value='Sort by'/>
                <Button className={'mode-button ' + (this.props.sortByMode==sortBy.releaseDay?this.focusColor:'')} 
                    caption='release date' 
                    onClick={ () => this.props.setSorting(sortBy.releaseDay) }/>
                <Button className={'mode-button ' + (this.props.sortByMode==sortBy.rating?this.focusColor:'')} 
                    caption='rating' 
                    onClick={ () => this.props.setSorting(sortBy.rating) }/>    
            </span>
        </div>
        );
    }
}

SortPanel.propTypes = {
    resultsCount: PropTypes.string,
    sortByMode: PropTypes.string,
    setSorting: PropTypes.func
};

const mapStateToProps = state => {
    return {
        sortByMode: state.getIn(['global', 'sortedBy']),
        resultsCount: state.getIn(['global', 'resultsCount']),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSorting: sortBy => { dispatch(setSortingMode(sortBy)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortPanel)