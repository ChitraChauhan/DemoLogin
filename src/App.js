import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { Link } from 'react-router';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: true,
            isPaneOpenLeft: true,
        };
    }
    componentDidMount() {
        this.setState({isPaneOpen: true})
    }
    render() {
        return (
            <div>
                <div>
                    <SlidingPane
                        isOpen={ this.state.isPaneOpenLeft }
                        title='Menu Pane'
                        from='left'
                        width='240px'
                        onRequestClose={ () => this.setState({isPaneOpenLeft: false}) }
                    >
                    <div className="sidebar">
                        <Link to="/register">Registration</Link>
                        <br/><br/>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    </SlidingPane>
                    <div>
                        <img className="image"
                             onClick={ () => this.setState({isPaneOpenLeft: !this.state.isPaneOpenLeft}) }
                             src="http://mhfwellness.org/assets/website/menu-toggle.png"/>
                    </div>
                </div>;
                <div className="App">
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
                }
        </div>
            );
        }
}

export default App;