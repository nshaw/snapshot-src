import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class SnapshotElement extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);
        ReactDOM.render(<App />, this.mountPoint);
    }
}

customElements.define('snapshot-widget', SnapshotElement);

export default SnapshotElement;