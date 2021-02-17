import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import {Modal,Container,Toast} from "react-bootstrap";


class OrganizationTabs extends Component {
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
                <span className="bs-stepper-label">Organization Profile</span>
              </button>
            </div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Date/Time Preferences</span>
              </button>
            </div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Manage Super/Admin User</span>
              </button>
              
            </div>
          </div>
          <div className="bs-stepper-content">
            <form onSubmit={this.onSubmit}>
              <div id="test-l-1" className="content  pl-2 width-80 small_font">
                <div className="form-group">
                  <label for="exampleInputEmail1">Organization Name*</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Upload Logo</label>
                  <input type="file" className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Address*</label>
                  <input type="email" className="form-control" placeholder="Enter Address" />
                </div>
                <div className="form-group">
                  <label>Address 2</label>
                  <input type="email" className="form-control" placeholder="Enter Address 2" />
                </div>
                <div className="row form-group">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>City*</label>
                      <input type="text" className="form-control" placeholder="City" name="city"/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <label>State*</label>
                      <select placeholder="State" className="form-control" name="state">
                          <option>State</option>
                          <option>Alabama - AL</option>
                          <option>Alaska - AK</option>
                          <option>Alabama - AL</option>
                          <option>Arizona - AZ</option>
                          <option>Arkansas - AR</option>
                          <option>California - CA</option>
                          <option>Colorado - CO</option>
                          <option>Connecticut - CT</option>
                          <option>Delaware - DE</option>
                          <option>District of Columbia - DC</option>
                          <option>Florida - FL</option>
                          <option>Georgia - GA</option>
                          <option>Hawaii - HI</option>
                          <option>Idaho - ID</option>
                          <option>Illinois - IL</option>
                          <option>Indiana - IN</option>
                          <option>Iowa - IA</option>
                          <option>Kansas - KS</option>
                          <option>Kentucky - KY</option>
                          <option>Louisiana - LA</option>
                          <option>Maine - ME</option>
                          <option>Maryland - MD</option>
                          <option>Massachusetts - MA</option>
                          <option>Michigan - MI</option>
                          <option>Minnesota - MN</option>
                          <option>Mississippi - MS</option>
                          <option>Missouri - MO</option>
                          <option>Montana - MT</option>
                          <option>Nebraska - NE</option>
                          <option>Nevada - NV</option>
                          <option>New Hampshire - NH</option>
                          <option>New Jersey - NJ</option>
                          <option>New Mexico - NM</option>
                          <option>New York - NY</option>
                          <option>North Carolina - NC</option>
                          <option>North Dakota - ND</option>
                          <option>Ohio - OH</option>
                          <option>Oklahoma - OK</option>
                          <option>Oregon - OR</option>
                          <option>Pennsylvania - PA</option>
                          <option>Puerto Rico - PR</option>
                          <option>Rhode Island - RI</option>
                          <option>South Carolina - SC</option>
                          <option>South Dakota - SD</option>
                          <option>Tennessee - TN</option>
                          <option>Texas - TX</option>
                          <option>Utah - UT</option>
                          <option>Vermont - VT</option>
                          <option>Virginia - VA</option>
                          <option>Washington - WA</option>
                          <option>West Virginia - WV</option>
                          <option>Wisconsin - WI</option>
                          <option>Wyoming - WY</option>
                      </select>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Zip Code*</label>
                    <input type="text" className="form-control" placeholder="Zip Code" name="zip_code"/>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Country*</label>
                      <input type="text" className="form-control" placeholder="Country" name="country"/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Phone Number*</label>
                    <input type="text" className="form-control" placeholder="Phone Number" name="phone_number"/>  
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Fax Number*</label>
                    <input type="text" className="form-control" placeholder="Fax Number" name="fax_number"/>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Email*</label>
                      <input type="text" className="form-control" placeholder="Email" name="email"/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>Website*</label>
                    <input type="text" className="form-control" placeholder="Website" name="website"/>  
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <label>TIN Number*</label>
                    <input type="text" className="form-control" placeholder="TIN Number" name="tin_number"/>
                  </div>
                </div>
                <ul className="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
                  <li><button className="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
                  <li><button className="button resend-btn py-2 px-4 m-0">Save Changes</button></li>
                </ul>
              </div>
              <div id="test-l-2" className="content  pl-2 width-80 small_font">
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Timesheet Recording Period*</label>
                      <select placeholder="Select" className="form-control" name="state">
                          <option>Select</option>
                          <option selected='selected'>Weekly</option>
                          <option>Bi-Weekly</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Date Format*</label>
                      <select placeholder="Select" className="form-control" name="state">
                          <option>Select</option>
                          <option>(mm/dd/yyyy)</option>
                          <option>(dd-mm-yyyy)</option>
                      </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Time Format*</label>
                      <select placeholder="Select" className="form-control" name="state">
                          <option>Select</option>
                          <option>08:09:00 AM</option>
                          <option>20:09:00</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>Day of the week calendar starts on*</label>
                      <select placeholder="Select" className="form-control" name="state">
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
                    <label>Timesheet Recording Period*</label>
                      <select placeholder="Select" className="form-control" name="state">
                          <option>Select</option>
                          <option>Weekly</option>
                          <option>Bi-Weekly</option>
                      </select>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label>Current Payroll Period*</label>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>From Date*</label>
                    <input type="date" className="form-control" placeholder="From Date" name="country"/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <label>End Date*</label>
                    <input type="date" className="form-control" placeholder="End Date" name="country"/>
                  </div>
                </div>
                <ul className="row form-group mr-0 mt-4 pr-0 list-inline pull-right">
                  <li><button className="button cancel-btn py-2 px-4 m-0 mr-2">Cancel</button></li>
                  <li><button className="button resend-btn py-2 px-4 m-0">Save Changes</button></li>
                </ul>
              </div>
              <div id="test-l-3" className="content pl-2 width-80 small_font">
                <h6>Super User Account Management</h6>
                <label>Add Super User<button type="button" onClick={() => this.setState({ supershow: true })} className="button resend-btn mt-1">Add</button></label>
               
                <p className="mt-1 font-weight-bold">Manage Super User Information and Rights</p>
                <div className="row form-group border-bottom">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <label>John Henry</label>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p><span className="link-style" onClick={() => this.setState({ editsupershow: true })}>Edit</span> | 
                    <span className="link-style" onClick={() => this.setState({ remove: true })}>Remove</span></p>
                  </div>
                </div>
                <div className="row form-group border-bottom">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <label>Helen Nisha</label>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p><span className="link-style" onClick={() => this.setState({ editsupershow: true })}>Edit</span> | 
                    <span className="link-style" onClick={() => this.setState({ remove: true })}>Remove</span></p>
                  </div>
                 
                </div>
                <h6 className="mt-5">Administrator Account Management</h6>
                <label>Add Administrator<button type="button" onClick={() => this.setState({ show: true })} className="button resend-btn mt-1">Add</button></label>
                <p className="mt-1 font-weight-bold">Manage Administrator Information and Rights</p>
                <div className="row form-group border-bottom">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <label>John Henry</label>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p><span className="link-style" onClick={() => this.setState({ editshow: true })}>Edit</span> | 
                    <span className="link-style" onClick={() => this.setState({ remove: true })}>Remove</span></p>
                  </div>
                </div>
                <div className="row form-group border-bottom">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <label>Helen Nisha</label>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p><span className="link-style" onClick={() => this.setState({ editshow: true })}>Edit</span> | 
                    <span className="link-style" onClick={() => this.setState({ remove: true })}>Remove</span></p>
                  </div>
                 
                </div>
              </div>
            </form>
            <Modal size="lg" onHide={() => this.setState({ supershow: false })}
          show={this.state.supershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
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
    <Modal size="lg"  onHide={() => this.setState({ editsupershow: false })}
          show={this.state.editsupershow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Super User
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
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button cancel-btn py-2 px-4 m-0 mr-2">Close</button></li>
        <li><button onClick={() => this.setState({ editsupershow: false })} class="button resend-btn py-2 px-4 m-0">Save</button></li>
      </ul>
      </Modal.Footer>
    </Modal>
    <Modal size="lg"  onHide={() => this.setState({ show: false })}
          show={this.state.show}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Add Administrator
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
    <Modal size="lg"  onHide={() => this.setState({ editshow: false })}
          show={this.state.editshow}
           aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title className="h6" id="example-modal-sizes-title-lg">
        Edit Administrator User
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

export default OrganizationTabs;
