import PropTypes from 'prop-types'
import React from 'react'

class LiveSearch extends React.Component {
    timerId;

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    onInput = (e) => {
        clearTimeout(this.timerId);
        const value = e.target.value;
        this.timerId = setTimeout(() => this.props.action(this.props.componentType, value), 200);
    };

    render() {
        return <input type="search" onInput={this.onInput}/>
    }
}

LiveSearch.propTypes = {
    action: PropTypes.func.isRequired,
    componentType: PropTypes.string.isRequired
};

export default LiveSearch;
