import React from 'react';

class Header extends React.Component {

    render() { 
        return ( 
            <div>
                <nav>
                    <ul>
                        <li><button
                        onClick={() => this.props.selectPage('map')}
                        >
                            Карта
                            </button>
                        </li>
                        <li><button
                         onClick={() => this.props.selectPage('profile')}
                        >
                            Профиль
                            </button>
                        </li>
                        <li><button
                         onClick={() => this.props.selectPage('login')}
                        >
                            Логин
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default Header;