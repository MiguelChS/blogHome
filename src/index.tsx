import * as React from 'react';
import { render } from 'react-dom';
import { Header } from 'blg-header';
import { ListPost } from 'blg-listpost';
import './index.css';
import { contentHome } from './index.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <div className={contentHome}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <ListPost/>
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
