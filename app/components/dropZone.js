"use strict";

import React from "react";

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.prevent = this.prevent.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  prevent(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  fileHandler(event) {
    event.preventDefault();
    let transfer = event.dataTransfer;
    let file;
    if (transfer) {
      file = transfer.files[0];
    }
    else {
      file = event.target.files[0];
    }
    this.props.handler(file);

  }

  clickHandler() {
    this.input.click();
  }

  render() {
    return (
      <div className="twelve columns">
        <input type="file" accept="image/*" style={{ display: "none" }} onChange={this.fileHandler} ref={(ref) => this.input = ref} />
        <div onDragEnter={this.prevent}
          onDragOver={this.prevent}
          onDrop={this.fileHandler}
          className="u-max-full-width"
          style={{ height: "50rem", background: "url(\"image-icon.png\") center no-repeat", margin: "0 auto", cursor: "pointer" }} //<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          onClick={this.clickHandler}>
        </div>
        <p style={{ textAlign: "center" }} >Drag an Image(png or jpeg) here or just <a href="#" onClick={this.clickHandler}>click</a>!</p>
        <p style={{ textAlign: "center" }} >Credited : https://github.com/matthiaskern/spotify-react-picturify</p>
      </div>
    );
  }
}
