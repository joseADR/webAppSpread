import React from 'react';
import '../pages/UserPerfil.css'

export default class UserPerfil extends React.Component {
    render() {
        return (
            <div className="UserPerfilWrapper">
                <div className="UserPerfilHeader"></div>
                <div className="UserPerfilBody">
                    <div className="card">
                        <div className="cardHeader"></div>
                        <div className="cardBody"></div>
                    </div>
                    <div className="UserEdition">
                        <div className="preview-container">
                            <div className="backgroundImg"></div>
                            <div className="avatarImg"></div>
                            <div className="cardBody"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}