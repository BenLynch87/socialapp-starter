import React from "react";
import MiniLogin from "../miniLogin/MiniLogin";
import Modal from "react-bootstrap/Modal";
import "../registerPopup/RegisterPopup.css";

class RegisterPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  handleClose = () => this.setState({ show: false });

  render() {
    return (
      <div className="RegisterPopupBody">
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You For Registering!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MiniLogin
              username={this.props.username}
              password={this.props.password}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RegisterPopup;