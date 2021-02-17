import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdminHeader from './components/AdminHeader.js';
import Footer from './components/Footer.js';

class MyProfile extends React.Component {  
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
            <div className="border-bottom">
                <p className="mb-0">Change Your Password</p>
            </div>
            <div className="my-4">
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Password*</label>
                    <input type="password" className="form-control" placeholder="password" name="password"/>  
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Confirm Password*</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirm_password"/>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Current Password*</label>
                    <input type="password" className="form-control" placeholder="Current password" name="current_password"/>  
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Confirm Current Password*</label>
                    <input type="password" className="form-control" placeholder="Confirm Current Password" name="current_confirm_password"/>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" name="email"/>  
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Login Name</label>
                    <input type="text" className="form-control" placeholder="Login Name" name="login_name"/>
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
        </div>
        <Footer />
      </Container>
      
    </div>
  );
  }
}

export default MyProfile;
