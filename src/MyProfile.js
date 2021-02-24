import React from 'react';
import {Container,Row,Col,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import Footer from './components/Footer.js';


class MyProfile extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      nameeditable: true,
      emaileditable: true,
      reset: false,
    };
  } 
render() {
  return (
    <div className="App">
      <Container>
        <header className="admin-header">
            <AdminHeader />
        </header>
        <div className="content pl-2 width-80 small_font">
            <div>
                <h6>Super User Profile - Joe Smith (jssmith@abccompany.com)</h6>
                <p className="">Manage Super User Information and Rights</p>
            </div>
            <div className="my-4">
                <div className="row form-group">
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <label>Login Name</label>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input type="text" disabled={this.state.nameeditable} className="form-control" value="Joe Smith" placeholder="Enter Login Name" name="confirm_password"/>
                  </div>
                  <div style={this.state.nameeditable === true ? { display: 'none' } : {}} className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <p>
                    <span className="link-style pl-0" onClick={() => this.setState({ nameeditable: true })}>Cancel</span> | 
                    <span className="link-style pl-2" onClick={() => this.setState({ nameeditable: true })}>Save</span>
                    </p>
                  </div>
                  <div style={this.state.nameeditable === true ? {} : { display: 'none' }} className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <p>
                    <span className="link-style pl-0 mt-1" onClick={() => this.setState({ nameeditable: false })}>Change</span>
                    </p>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <label>Email</label>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input type="email" disabled={this.state.emaileditable} className="form-control" value="joe@gmail.com" placeholder="Enter Login Name" name="confirm_password"/>
                  </div>                  
                  <div style={this.state.emaileditable === true ? { display: 'none' } : {}} className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <p>
                    <span className="link-style pl-0" onClick={() => this.setState({ emaileditable: true })}>Cancel</span> | 
                    <span className="link-style pl-2" onClick={() => this.setState({ emaileditable: true })}>Save</span>
                    </p>
                  </div>
                  <div style={this.state.emaileditable === true ? {} : { display: 'none' }} className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <p>
                    <span className="link-style pl-0 mt-1" onClick={() => this.setState({ emaileditable: false })}>Change</span>
                    </p>
                  </div>
                </div>                
                <div className="row form-group">
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <label>Password</label>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <input type="password" disabled='disabled' className="form-control" value="*******" placeholder="Enter Login Name" name="confirm_password"/>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 pt-2">
                    <p>
                    <span className="link-style pl-0" onClick={() => this.setState({ reset: true })}>Reset</span> 
                    </p>
                  </div>
                </div>
            </div>
            <div>
                <div className="border-bottom">
                    <p className="mb-0">Change Your Profile Photo</p>
                </div>
                <Row className="p-3 text-center">
                    <Col lg="3" md="3" sm="12">
                        <p className="text-muted">Upload Photo</p>
                        <img alt="Banner" class="profile-img"  width="50%"
                        src={require("./components/assets/img/user-default.png").default} />
                        <p>File size limit: 1 MB</p>
                    </Col>
                    <Col lg="3" md="3" sm="12" className="mt-6">
                        <button className="button resend-btn py-2 px-4 m-0">Choose File</button>
                    </Col>
                </Row>
            </div>
            <Modal size="md"  onHide={() => this.setState({ reset: false })}
          show={this.state.reset}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Reset Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Current Password*</label>
              <input type="password" className="form-control" placeholder="Enter Current Password"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">New Password*</label>
              <input type="password" className="form-control" placeholder="Enter New Password"/>
            </div>
            <div className="form-group">
              <label>Confirm New Password*</label>
              <input type="password" className="form-control" placeholder="Enter Confirm New Password" />
            </div>       
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ reset: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ reset: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
        </div>
      </Container>
      
    </div>
  );
  }
}

export default MyProfile;
