import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {Modal,Container,Toast,Row,Col,Card,Nav} from "react-bootstrap";
import LoadMyTeamTable from './LoadMyTeamTable.js';
import EmployeeList from './EmployeeList.js';
import { CardBody, CardFooter, CardHeader } from 'reactstrap';
import { MDBBtn} from 'mdbreact';
import {NavLink} from "react-router-dom";

class MyTeamTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
      viewshow: false,
      editshow: false,
      supershow: false,
      editsupershow: false,
      name: 'React',
      remove: false,
      edit: true,
      editable: true,
      timeedit: true,
      timeeditable: true,
      reset: false,
      superreset: false,
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
                <span className="bs-stepper-label">Manage Employee Time</span>
              </button>
            </div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-label">Run Reports</span>
              </button>
            </div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-label">About Employees</span>
              </button>
              
            </div>
          </div>
          <div className="">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content small_font">
              <LoadMyTeamTable />
              </div>
              <div id="test-l-2" className="content  pl-2 width-80 small_font">
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Timesheet Recording Period*</label>
                      <select placeholder="Select" disabled={this.state.timeeditable} className="form-control" name="state">
                          <option>Select</option>
                          <option selected='selected'>Weekly</option>
                          <option>Bi-Weekly</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Date Format*</label>
                      <select placeholder="Select" disabled={this.state.timeeditable} className="form-control" name="state">
                          <option>Select</option>
                          <option>(mm/dd/yyyy)</option>
                          <option>(dd-mm-yyyy)</option>
                      </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Time Format*</label>
                      <select placeholder="Select" disabled={this.state.timeeditable} className="form-control" name="state">
                          <option>Select</option>
                          <option>08:09:00 AM</option>
                          <option>20:09:00</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Day of the week calendar starts on*</label>
                      <select placeholder="Select" disabled={this.state.timeeditable} className="form-control" name="state">
                          <option>Select</option>
                          <option>Sunday</option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Friday</option>
                          <option>Saturday</option>
                      </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label>Pay Period Frequency*</label>
                      <select placeholder="Select" disabled={this.state.timeeditable} className="form-control" name="state">
                          <option>Select</option>
                          <option>Bi-Weekly(26/year)</option>
                          <option>Semi-Monthly(24/year)</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label>Current Payroll Period*</label>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>From Date*</label>
                    <input type="date" disabled={this.state.timeeditable} className="form-control" placeholder="From Date" name="country"/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>End Date*</label>
                    <input type="date" disabled={this.state.timeeditable} className="form-control" placeholder="End Date" name="country"/>
                  </div>
                </div>
                <ul style={this.state.timeedit === true ? {} : { display: 'none' }} className="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
                  <li><button  onClick={() => this.setState({ timeedit: false,timeeditable:false })} className="button resend-btn py-2 px-4 m-0 mr-2">Edit</button></li>
                </ul>
                <ul style={this.state.timeedit === true ? { display: 'none' } : {}} className="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
                  <li><button  onClick={() => this.setState({ timeedit: true,timeeditable:true })} className="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
                  <li><button  onClick={() => this.setState({ timeedit: true,timeeditable:true })} className="button resend-btn py-2 px-4 m-0">Save Changes</button></li>
                </ul>
              </div>
              <div id="test-l-3" className="content pl-2 small_font">
                <Row>
                    <Col lg="3" md="3" sm="12">
                      <Nav.Link as={NavLink} to="/EmployeeList" className="p-0 text-dark">
                        <Card className="border">
                            <CardHeader className="pb-0 pt-4">
                                <h6 className="font-weight-bolder">
                                    OTHA (948)
                                </h6>
                            </CardHeader>
                            <CardBody className="py-1 font-11">
                                <div className="font-10">
                                    Project Created : 4/01/2020
                                </div>
                                <div className="font-10">
                                    Project Administrator : Jessy Lake
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-book" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </MDBBtn>
                                </div>
                            </CardFooter>
                        </Card>
                        </Nav.Link>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                      <Nav.Link as={NavLink} to="/EmployeeList" className="p-0 text-dark">
                        <Card className="border">
                            <CardHeader className="pb-0 pt-4">
                                <h6 className="font-weight-bolder">
                                    CLA (712)
                                </h6>
                            </CardHeader>
                            <CardBody className="py-1 font-11">
                                <div className="font-10">
                                    Project Created : 4/01/2020
                                </div>
                                <div className="font-10">
                                    Project Administrator : Jessy Lake
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-book" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-cog" aria-hidden="true"></i>
                                    </MDBBtn>
                                    <MDBBtn  size="lg" className="round-btn">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </MDBBtn>
                                </div>
                            </CardFooter>
                        </Card>
                        </Nav.Link>
                    </Col>
                </Row>
                <div className="mt-5">
                  <EmployeeList />
                </div>
              </div>
            </form>
            <Modal scrollable={true} size="lg" onHide={() => this.setState({ supershow: false })}
          show={this.state.supershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Add Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
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
            <div className="p-3 form-group row">
              
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ supershow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ supershow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="lg"  onHide={() => this.setState({ editsupershow: false })}
          show={this.state.editsupershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Super User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="p-3 form-group row">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
              </div>        
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="xl"  onHide={() => this.setState({ show: false })}
          show={this.state.show}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Add Administrator
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
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
            <div className="p-3 form-group row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Employees</label>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Policies</label>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 pl-4">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label pl-1">Do Reporting</label>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
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
    <Modal scrollable={true} size="xl"  onHide={() => this.setState({ editshow: false })}
          show={this.state.editshow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Administrator User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">First Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter First Name" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <label for="exampleInputEmail1">Last Name*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label>Login Name*</label>
              <input type="text" className="form-control" placeholder="Enter Login Name" />
            </div>
            <div className="p-3 form-group row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Employees</label>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Modify Policies</label>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 p-0 pl-4">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label pl-1">Do Reporting</label>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10 p-0">
              <input type="checkbox" className="form-control permission-checkbox" name="country"/>
              <label className="permission-label">Final Approval of Timesheet</label>
              </div>  
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
    <Modal scrollable={true} size="md"  onHide={() => this.setState({ superreset: false })}
          show={this.state.superreset}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Reset Super User Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Password*</label>
              <input type="email" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password*</label>
              <input type="text" className="form-control" placeholder="Enter Confirm Password" />
            </div>       
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <ul class="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
        <li><button onClick={() => this.setState({ superreset: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ superreset: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal scrollable={true} size="md"  onHide={() => this.setState({ reset: false })}
          show={this.state.reset}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Reset Administrator Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid small_font">
        <Container>
            <div className="form-group">
              <label for="exampleInputEmail1">Password*</label>
              <input type="email" className="form-control" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password*</label>
              <input type="text" className="form-control" placeholder="Enter Confirm Password" />
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

export default MyTeamTabs;
