import React from 'react';
import './style.css';

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h1>Componente de Teste</h1>
                <button>Button</button>
                <div>
                    <span>Span here</span>
                    <button>button 2</button>
                </div>
                </header>
        );
    }
}

export default Header;