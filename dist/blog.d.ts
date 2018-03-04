/// <reference types="react" />
import * as React from 'react';
import { IProps as IPropsPagePost } from 'blg-post';
import './blog.css';
export { IPropsPagePost };
export interface IState {
    typePage: string;
}
export declare class App extends React.Component<{}, IState> {
    private content;
    constructor(props: {});
    componentWillMount(): void;
    render(): JSX.Element;
}
