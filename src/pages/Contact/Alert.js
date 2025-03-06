import React from 'react';
import './Alert.css'; // Assurez-vous que le fichier CSS est correct

const Alert = ({ message, onClose, isSuccess }) => {
  return (
    <div className={`alert ${isSuccess ? 'success' : 'error'} dark`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">&times;</button>
    </div>
  );
};

export default Alert;