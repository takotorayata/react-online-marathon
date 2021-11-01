import React from 'react';
import Button from '../button/button.js';
import './app.css';

export default function App(){
    return <div className='wrapper-app' data-testid='element-app'><Button /></div>;
}

// App component at ./components/app/app.js

// import app.css as css-file
// add html attr:class wrapper-app to div tag
// Button component at ./components/button/button.js

// add inner text Wake up Neo...
// add inline styles to button tag with this values:
