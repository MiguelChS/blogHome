import * as React from 'react';
import { render } from 'react-dom';
import { App, IPropsPagePost } from './blog';

export { IPropsPagePost }
declare global {
    interface Window {
        dataBlogPage: {
            page: string
            data: IPropsPagePost
        }
    }
}

render(<App />, document.getElementById('app'));
