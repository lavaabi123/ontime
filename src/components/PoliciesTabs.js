import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {Modal,Container,Toast} from "react-bootstrap";
import LoadPoliciesTable from './LoadPoliciesTable.js';
import LoadHolidaysTable from './LoadHolidaysTable.js';

class PoliciesTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
      viewshow: false,
      editshow: false,
      name: 'React',
      remove: false,
    };
  } 
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Time Clock Rounding</span>
              </button>
            </div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Holiday Policies</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content  pl-2 small_font">
                <LoadPoliciesTable />
              </div>
              <div id="test-l-2" className="content  pl-2 small_font">
                <LoadHolidaysTable />
              </div>
            </form>
            <Modal
          show={this.state.show}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title className="m-auto h6" id="contained-modal-title-vcenter">
        Add Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
          <div className="form-group">
              <label for="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>          
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ show: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ show: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal
          show={this.state.editshow}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title className="m-auto h6" id="contained-modal-title-vcenter">
        Edit Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
          <div className="form-group">
              <label for="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" value="John Henry" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" value="henry@gmail.com" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" value="henry@gmail.com"  placeholder="Enter Login Name" />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input type="password" className="form-control" value="12345"  placeholder="Enter Password" />
            </div>          
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ editshow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal
          show={this.state.viewshow}
           aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title className="m-auto h6" id="contained-modal-title-vcenter">
        View Super User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Name : John Henry</label>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email : henry@gmail.com</label>
            </div>
            <div className="form-group">
              <label>Login Name : henry@gmail.com</label>
            </div>
            <div className="form-group">
              <label>Password : *****</label>
            </div>          
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ viewshow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ viewshow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
          </div>
        </div>
        <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
  }}
>
  <Toast
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
    }} onClose={() =>this.setState({ remove: false })} show={this.state.remove} delay={2000} autohide>
          <Toast.Body>Removed Super User Successfully!</Toast.Body>
        </Toast>
      </div>
      </div>
    );
  }
}

export default PoliciesTabs;
