import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareSVG from '../images/shareIcon.svg';
import '../styles/ButtonShare.css';

export default function ButtonShare({ link, testId }) {
  const [alert, setAlert] = useState('');

  function handleClick(url) {
    navigator.clipboard.writeText(url);
    setAlert('Link copiado!');
  }
  return (
    <>
      <span>{ alert }</span>
      <button
        type="button"
        data-testid={ testId }
        onClick={ () => handleClick(link) }
        src={ shareSVG }
        className="button-share"
      >
        <img src={ shareSVG } alt="botão de Compartilhar" />
      </button>
    </>
  );
}

ButtonShare.defaultProps = {
  testId: 'share-btn',
};

ButtonShare.propTypes = {
  link: PropTypes.string.isRequired,
  testId: PropTypes.string,
};
