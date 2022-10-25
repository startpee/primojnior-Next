import React from 'react'

import PropTypes from 'prop-types'

const SolidButton = (props) => {
  return (
    <>
      <div className={`solid-button-container ${props.rootClassName} `}>
        <button className="solid-button-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .solid-button-container {
            display: flex;
            position: relative;
          }
          .solid-button-button {
            color: var(--dl-color-gray-white);
            border: none;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #4028a0;
          }
          .solid-button-root-class-name {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

SolidButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SolidButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButton
