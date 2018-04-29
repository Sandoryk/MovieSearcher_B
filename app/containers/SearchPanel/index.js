import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import Button from 'components/Button';

export default class SearchPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props); 
        this.state = {searchString: props.value};
    }

    setFilter(){
        //console.log("STATE " + this.state.searchString);
    }

    updateInputValue(evt) {
        this.setState({
            searchString: evt.target.value
        });
      }

    render() {
        console.log(this.state.searchString);
        return (
        <div>
            <Label className='searchField-label' value='FIND YOUR MOVIE'/>
            <input className='searchField' 
                type="text" name="searchField" 
                id="searchField" 
                defaultValue={this.state.searchString} 
                onChange={this.updateInputValue.bind(this)}/>
            <Button className='' caption='Search' onClick={this.setFilter.bind(this)}/>
        </div>
        );
    }
}

Label.propTypes = {
    value: PropTypes.string
};
