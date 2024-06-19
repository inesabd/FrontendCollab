import React, { useState } from 'react';
import './Formulaire.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulaire = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contact: '',
        password: '',
        confirmPassword: '',
        day: '',
        month: '',
        year: '',
        gender: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.firstName) errors.firstName = "Prénom requis";
        if (!formData.lastName) errors.lastName = "Nom de famille requis";
        if (!formData.contact) errors.contact = "Numéro mobile ou e-mail requis";
        if (!formData.password) errors.password = "Mot de passe requis";
        if (!formData.confirmPassword) errors.confirmPassword = "Confirmation de mot de passe requise";
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Les mots de passe ne correspondent pas";
        if (!formData.day) errors.day = "Jour requis";
        if (!formData.month) errors.month = "Mois requis";
        if (!formData.year) errors.year = "Année requise";
        if (!formData.gender) errors.gender = "Genre requis";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Logic to handle form submission
            console.log("Form submitted successfully", formData);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <img src="/recom.png" alt="Logo" className="logo" />
                            <p className="text-center">Créer un Compte</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Prénom" 
                                            name="firstName" 
                                            value={formData.firstName} 
                                            onChange={handleChange} 
                                        />
                                        {formErrors.firstName && <small className="text-danger">{formErrors.firstName}</small>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nom de famille" 
                                            name="lastName" 
                                            value={formData.lastName} 
                                            onChange={handleChange} 
                                        />
                                        {formErrors.lastName && <small className="text-danger">{formErrors.lastName}</small>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Numéro mobile ou e-mail" 
                                        name="contact" 
                                        value={formData.contact} 
                                        onChange={handleChange} 
                                    />
                                    {formErrors.contact && <small className="text-danger">{formErrors.contact}</small>}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Mot de passe" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                    />
                                    {formErrors.password && <small className="text-danger">{formErrors.password}</small>}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Confirmer le mot de passe" 
                                        name="confirmPassword" 
                                        value={formData.confirmPassword} 
                                        onChange={handleChange} 
                                    />
                                    {formErrors.confirmPassword && <small className="text-danger">{formErrors.confirmPassword}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Date de naissance</label>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <select 
                                                className="form-control" 
                                                name="day" 
                                                value={formData.day} 
                                                onChange={handleChange}
                                            >
                                                <option value="">Jour</option>
                                                {days.map(day => (
                                                    <option key={day} value={day}>{day}</option>
                                                ))}
                                            </select>
                                            {formErrors.day && <small className="text-danger">{formErrors.day}</small>}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <select 
                                                className="form-control" 
                                                name="month" 
                                                value={formData.month} 
                                                onChange={handleChange}
                                            >
                                                <option value="">Mois</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                            {formErrors.month && <small className="text-danger">{formErrors.month}</small>}
                                        </div>
                                        <div className="form-group col-md-3">
                                            <select 
                                                className="form-control" 
                                                name="year" 
                                                value={formData.year} 
                                                onChange={handleChange}
                                            >
                                                <option value="">Année</option>
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                            {formErrors.year && <small className="text-danger">{formErrors.year}</small>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Genre</label>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="gender" 
                                            id="female" 
                                            value="female" 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-check-label" htmlFor="female">
                                            Femme
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="gender" 
                                            id="male" 
                                            value="male" 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-check-label" htmlFor="male">
                                            Homme
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="gender" 
                                            id="custom" 
                                            value="custom" 
                                            onChange={handleChange} 
                                        />
                                        <label className="form-check-label" htmlFor="custom">
                                            Personnalisé
                                        </label>
                                    </div>
                                    {formErrors.gender && <small className="text-danger">{formErrors.gender}</small>}
                                </div>
                                <button type="submit" className="button">S'inscrire</button>
                            </form>
                            <p className="text-muted small text-center">
                                Merci de renseigner tous les champs avant de s'inscrire
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulaire;
