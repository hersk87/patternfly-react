import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../index';

const AboutModal = ({
  children,
  className,
  show,
  onHide,
  productTitle,
  logo,
  altLogo,
  trademarkText,
  closeText,
  ...rest
}) => {
  return (
    <Modal
      className={className}
      contentClassName="about-modal-pf"
      show={show}
      onHide={onHide}
      {...rest}
    >
      <Modal.Header>
        <Modal.CloseButton onClick={onHide} closeText={closeText} />
      </Modal.Header>
      <Modal.Body>
        <h1>{productTitle}</h1>
        {children}
        <div className="trademark-pf">{trademarkText}</div>
      </Modal.Body>
      <Modal.Footer>
        <img src={logo} alt={altLogo} />
      </Modal.Footer>
    </Modal>
  );
};

AboutModal.defaultProps = {
  closeText: 'Close'
};

AboutModal.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to show the modal */
  show: PropTypes.bool.isRequired,
  /** Function to call when modal is closed */
  onHide: PropTypes.func.isRequired,
  /** Text or Element to show for the product title */
  productTitle: PropTypes.node,
  /** Image Source for the Product logo */
  logo: PropTypes.string,
  /** Alternate text if invalid logo */
  altLogo: PropTypes.string,
  /** Trademark information text */
  trademarkText: PropTypes.string,
  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};

export default AboutModal;
