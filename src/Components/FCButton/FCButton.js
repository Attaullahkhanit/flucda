import React from 'react';

import './FCButton.scss';

function FCButton({primary,
    children,
    className = "",
    loading,
    loaderProps,
    ...rest
    }) {
        
  return (
    <>
      {loading ? (
        <FAELoading {...loaderProps} />
      ) : (
        <button
          className={`fae-button ${
            primary && "primary-fae-button"
          } ${className}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default FCButton
