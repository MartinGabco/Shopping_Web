import React, { Component } from 'react'

class ThumbsUp extends Component {
    render() {      
        let classes = "fa fa-thumbs-up";
        if (!this.props.liked) classes += "fa fa-thumbs-o-up";   
        return (
            <i onClick={this.props.onClick} style={{ cursor: "pointer", color: "blue" }} className={classes} aria-hidden="true" />
        );
    }
}

export default ThumbsUp
