import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import Button from 'components/Button';

export default class SearchMode extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props); 
        let mode = props.value == undefined || props.value == true ? true: false;
        this.state = {
            titleMode: mode,
            focusColor: 'button-background-color'
        };
    }

    setMode(){
        this.setState({
            titleMode: !this.state.titleMode
        });
    }

    render() {
        return (
        <div className='inline-block'>
            <Label className='searchField-label' value='SEARCH BY'/>
            <Button className={'mode-button ' + (this.state.titleMode?this.state.focusColor:'')} caption='TITLE' onClick={this.setMode.bind(this)}/>
            <Button className={'mode-button ' + (!this.state.titleMode?this.state.focusColor:'')} caption='GENRE' onClick={this.setMode.bind(this)}/>
        </div>
        );
    }
}

Label.propTypes = {
    value: PropTypes.string
};