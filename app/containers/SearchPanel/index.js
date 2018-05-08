import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import Button from 'components/Button';
import SearchMode from 'containers/SearchMode';
import BackgroundImage from 'components/BackgroundImage';

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
        return (
        <div>
            <BackgroundImage width='100%' height="200px">
            <Label className='searchField-label color-white' value='FIND YOUR MOVIE'/>
            <input className='searchField' 
                type="text" name="searchField" 
                id="searchField" 
                defaultValue={this.state.searchString} 
                onChange={this.updateInputValue.bind(this)}/>
            <SearchMode/>
            <Button className='search-button float-right button-background-color' caption='Search' onClick={this.setFilter.bind(this)}/>
            </BackgroundImage>
        </div>
        );
    }
}

Label.propTypes = {
    value: PropTypes.string
};
