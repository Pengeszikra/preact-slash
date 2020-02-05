import { h } from 'preact';

export default Content => ({show, ...props}) => show ? (<Content {...props}/>) : null;