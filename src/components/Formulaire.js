import React from 'react';
import './Formulaire.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulaire = () => {
    // Générer les options pour les jours, mois et années
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <img src="/recom.png" alt="Logo" className="logo" />
                            <p className="text-center">Créer un Compte</p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Prénom" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Nom de famille" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Numéro mobile ou e-mail" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Mot de passe" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirmer le mot de passe" />
                                </div>
                                <div className="form-group">
                                    <label>Date de naissance</label>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <select className="form-control">
                                                {days.map(day => (
                                                    <option key={day} value={day}>{day}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <select className="form-control">
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <select className="form-control">
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Genre</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="female" />
                                        <label className="form-check-label" htmlFor="female">
                                            Femme
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="male" />
                                        <label className="form-check-label" htmlFor="male">
                                            Homme
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="custom" />
                                        <label className="form-check-label" htmlFor="custom">
                                            Personnalisé
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="button">S'inscrire</button>
                            </form>
                           
                            <p className="text-muted small">
                             <p> Merci de renseigner tous les champs avant de s'inscrire</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulaire;
