import React, { Component } from 'react';

export default class ImageZoom extends Component {
    render() {
        const {image} = this.props;

        return (
            <img src={`${image}`}  class="img-fluid " />
        );
    }
}