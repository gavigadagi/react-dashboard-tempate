import React from 'react';
import { Formik } from 'formik';
import {Modal, Button} from 'react-bootstrap';

export const BasicExample = (props) => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={() => (
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.user}
                />
                {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
      )}
    />
  </div>
);
