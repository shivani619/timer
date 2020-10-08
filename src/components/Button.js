import React from 'react';

export default function Button({
  currentState,
	handleStateChange,
}) {

	return (
    <div>
      <br />
      <button 
        type="button"
        className="btn btn-default"
        data-testid="buttonLabel"
        onClick={() => handleStateChange(currentState)}
      >{currentState}
      </button>
    </div>
	)
}