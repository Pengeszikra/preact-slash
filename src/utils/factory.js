import { h, createElement } from 'preact';

export default ({type}, ...classList) => classList.map( className => props => React.createElement(type, {className, ...props}) );
