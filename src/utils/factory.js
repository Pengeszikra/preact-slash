import { h, createElement } from 'preact';

export default ({type}, ...classList) => classList.map( className => props => createElement(type, {className, ...props}) );
