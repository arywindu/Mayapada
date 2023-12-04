import React, { useState } from 'react';
import axios from 'axios';
import LayoutAdmin from '../../../Layout/LayoutAdmin';

const UbahPassword = () => {
    const thisToken = localStorage.getItem('token');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            setErrorMessage('Password tidak boleh kosong');
            alert('Password tidak boleh kosong');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('Password tidak sama');
            alert('Password tidak sama');
            return;
        }

        try {
            const response = await axios.put(
                'https://api.stikesmayapada.ac.id/api/user/2',
                {
                    username: localStorage.getItem('username'),
                    password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${thisToken}`,
                    },
                }
            );
            setSuccessMessage(response.data.message);
            alert('Password changed successfully!');
            handleResetFields()
        } catch (error) {
            setErrorMessage('Error saat mengganti password');
            console.error('Error saat mengganti password:', error);
            alert('Error saat mengganti password');
        }
    };

    const handleResetFields = () => {
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
        setSuccessMessage('');
    };

    return (
        <LayoutAdmin>
            <div className="password-change-form">
                <h2>Ganti Password</h2>
                <form onSubmit={handleChangePassword}>
                    <div className="form-group">
                        <label htmlFor="newPassword">Password Baru:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Konfirmasi Password Baru:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Ubah Password</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>

        <style jsx>{`
            .password-change-form {
                max-width: 900px;
                margin: 0 auto;
                padding: 90px;
                border: 1px solid #ccc;
                border-radius: 0px;
                background-color: #f9f9f9;
            }

            .password-change-form h2 {
                text-align: center;
            }

            .form-group {
                margin-bottom: 15px;
            }

            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }

            input[type='password'] {
                width: 100%;
                padding: 8px;
                border-radius: 3px;
                border: 1px solid #ccc;
            }

            button {
                padding: 8px 15px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }

            .error-message {
                color: red;
            }

            .success-message {
                color: green;
            }
        `}</style>
    </LayoutAdmin>
    );
};

export default UbahPassword;
