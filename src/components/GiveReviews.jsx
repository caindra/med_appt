import React, { useState } from 'react';

function GiveReviews({ showNotification }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.comment) {
      showNotification('Por favor complete todos los campos', 'error');
      return;
    }
    
    console.log('Reseña enviada:', formData);
    showNotification('¡Gracias por tu reseña!', 'success');
    setIsSubmitted(true);
    
    // Desactivar el formulario después de enviar
    setTimeout(() => {
      // El formulario queda deshabilitado permanentemente
    }, 0);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>⭐ Deja tu Reseña</h2>
      
      {isSubmitted ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: '#e8f5e9',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎉</div>
          <h3>¡Reseña Enviada!</h3>
          <p>Gracias por compartir tu experiencia con nosotros.</p>
          <p style={{ color: '#666', marginTop: '10px' }}>Tu opinión es muy importante para mejorar.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitted}  {/* ← AGREGAR DISABLED */}
              style={{ width: '100%', padding: '10px', ... }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Calificación:</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              disabled={isSubmitted}  {/* ← AGREGAR DISABLED */}
              style={{ width: '100%', padding: '10px', ... }}
            >
              {/* opciones */}
            </select>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label>Comentario:</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows="5"
              disabled={isSubmitted}  {/* ← AGREGAR DISABLED */}
              style={{ width: '100%', padding: '10px', ... }}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitted}  {/* ← AGREGAR DISABLED */}
            style={{
              width: '100%',
              padding: '12px',
              background: isSubmitted ? '#ccc' : '#2c3e50',
              cursor: isSubmitted ? 'not-allowed' : 'pointer',
              ...
            }}
          >
            {isSubmitted ? 'Reseña Enviada' : 'Enviar Reseña'}
          </button>
        </form>
      )}
      
      {isSubmitted && (
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#999' }}>
          <small>⚠️ Ya has enviado una reseña. Solo puedes enviar una.</small>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
