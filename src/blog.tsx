import * as React from 'react';
import { Header } from 'blg-header';
import { ListPost } from 'blg-listpost';
import { Post, IProps as IPropsPagePost } from 'blg-post';
import { mapPost } from './service.blog';
import './blog.css';
import { contentHome } from './blog.css';

export { IPropsPagePost }

export interface IState {
    typePage: string
}

export class App extends React.Component<{}, IState> {

    private content: JSX.Element | null = null;

    constructor(props: {}) {
        super(props)
        this.state = {
            typePage: window.dataBlogPage ? window.dataBlogPage.page : "home"
        }
    }

    componentWillMount() {
        switch (this.state.typePage) {
            case "post": {
                let props = mapPost();
                if (props) {
                    this.content = <Post {...props} />
                }
                break;
            }
            default: {
                this.content = <ListPost />
            }
        }
    }

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
                                {this.content}
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
