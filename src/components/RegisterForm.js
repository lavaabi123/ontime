import React from 'react';
import MultiCarousel from './MultiCarousel.js';
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        fields: {},
        errors: {},
        error_message: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };

    handleChange(e) {
      let fields = this.state.fields;
      let errors = this.state.errors;
      fields[e.target.name] = e.target.value;
      errors[e.target.name] = "form-control is-valid";
      this.setState({
        fields
      });
    }

    submituserRegistrationForm = (e) => {
      e.preventDefault();
      if (this.validateForm()) {          
        this.props.history.push("/account_created");
      }else{
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
      }
    }


    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["first_name"]) {
        formIsValid = false;
        errors["first_name"] = "form-control is-invalid";
      }
      if (!fields["last_name"]) {
        formIsValid = false;
        errors["last_name"] = "form-control is-invalid";
      }
      if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "form-control is-invalid";
      }
      if (!fields["tin"]) {
        formIsValid = false;
        errors["tin"] = "form-control is-invalid";
      }
      if (!fields["company_name"]) {
        formIsValid = false;
        errors["company_name"] = "form-control is-invalid";
      }
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "form-control is-invalid";
      }
      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "form-control is-invalid";
        }
      }
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "form-control is-invalid";
      }
      if (!fields["confirm_password"]) {
        formIsValid = false;
        errors["confirm_password"] = "form-control is-invalid";
      }
      let passIsValid = true;
      if (fields["password"] !== '' && fields["confirm_password"] !== '' && (fields["password"] !== fields["confirm_password"])) {        
        passIsValid = false;
        errors["confirm_password_msg"] = "form-control is-invalid";
        errors["confirm_password"] = "form-control is-invalid";
      }
      if((!formIsValid && passIsValid) || (!formIsValid && !passIsValid)){
        this.setState({
          error_message: 'Please fill all *Required Fields!'
        });
      }else if(!passIsValid && formIsValid){
        formIsValid = false;
        this.setState({
          error_message: 'Password and Confirm Password are not Same!'
        });
      }else{
        this.setState({
          error_message: ''
        });
      }
      
      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  render() {
    return (
      <div id="main-registration-container" className="regform"> 
        <div id="register">
            <h3>Sign up WizDepot - OnTime for free!</h3>
            <p className="text-center sub-text mt-3">Spend more time working and less time worrying about timesheet compliance</p>
            <span className="text-danger">{this.state.error_message}</span>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
            <div className="row mx-1">
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                    <input type="text" placeholder="First Name*" name="first_name" value={this.state.fields.first_name} onChange={this.handleChange} className={ (this.state.errors["first_name"] ? this.state.errors["first_name"] : '')} />
                </div>
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                    <input type="text" placeholder="Last Name*" name="last_name" value={this.state.fields.last_name} onChange={this.handleChange} className={ (this.state.errors["last_name"] ? this.state.errors["last_name"] : '')} />
                </div>
            </div>
            <div className="row mx-1">
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                  <input type="text" placeholder="Company Name*" name="company_name" value={this.state.fields.company_name} onChange={this.handleChange} className={ (this.state.errors["company_name"] ? this.state.errors["company_name"] : '')} />
                </div>
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                    <input type="text" placeholder="TIN*" name="tin" value={this.state.fields.tin} onChange={this.handleChange} className={ (this.state.errors["tin"] ? this.state.errors["tin"] : '')} />
                </div>
            </div>
            <div className="row mx-1 pt-3">
                <div className="col-12 px-1">
                    <input type="text" placeholder="Company Address" name="company_address" value={this.state.fields.company_address} onChange={this.handleChange} />
                </div>
            </div>
            <div className="row mx-1">
                <div className="pt-3 col-xl-4 col-lg-4 col-md-4 col-sm-12 px-1">
                    <input type="text" placeholder="City" name="city" value={this.state.fields.city} onChange={this.handleChange} />
                </div>
                <div className="pt-3 col-xl-5 col-lg-5 col-md-5 col-sm-12 px-1" style={{flex:'0 0 46.666667%',maxWidth:'46%'}}>
                    <select refs="selectPicker" placeholder="State" data-show-subtext="true" data-live-search="true" className="selectpicker form-control" name="state" onChange={this.handleChange}>
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
                <div className="pt-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 px-1" style={{flex:'0 0 20.666667%',maxWidth:'21%'}}>
                    <input type="text" placeholder="Zip Code" name="zip_code" value={this.state.fields.zip_code} onChange={this.handleChange} />
                </div>
            </div>
            <div className="row mx-1 pt-3">
                <div className="col-12 px-1">
                    <input type="text" placeholder="Login Name*" name="user_name" value={this.state.fields.user_name} onChange={this.handleChange} className={ (this.state.errors["user_name"] ? this.state.errors["user_name"] : '')} />
                </div>
            </div>
            <div className="row mx-1 pt-3">
                <div className="col-12 px-1">
                    <input type="text" placeholder="Email*" name="email" value={this.state.fields.email} onChange={this.handleChange} className={ (this.state.errors["email"] ? this.state.errors["email"] : '')} />
                </div>
            </div>
            <div className="row mx-1">
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                    <input type="password" placeholder="Password*" name="password" value={this.state.fields.password} onChange={this.handleChange} className={ (this.state.errors["password"] ? this.state.errors["password"] : '')} />
                </div>
                <div className="pt-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-1">
                        <input type="password" placeholder="Confirm Password*" name="confirm_password" value={this.state.fields.confirm_password} onChange={this.handleChange} className={ (this.state.errors["confirm_password"] ? this.state.errors["confirm_password"] : '')} />
                </div>
            </div>
            <div className="row pt-4">
                <input type="submit" className="button submit-btn-long"  value="Lets' Get to Work!"/>
            </div>
            <p className="text-center agree-text mt-3 mb-0">By signing up, you are agreeing to our <a href="!#" className="text-decoration-underline">terms</a></p>
            </form>
        </div>            
        <div className="about">
          <div className="col-12 pl-0 pr-0">
            <div className="float-left col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-3 mb-5">
              <p className="pl-0">WizDepot is currently being used by mulitple businesses in both the private and public sectors including:</p>
              <MultiCarousel />
            </div>
            <div className="float-right col-xl-6 col-lg-6 col-md-6 col-sm-12 pr-0">
              <h6 className="text-left">Simply the best way to track employee time</h6>
              <p className="text-justify">We provide simple but effective time tracking tools for Windows, Mac, Linux, iOS, and Android. Our lightweight desktop widget measures activity levels so you can monitor your remote team. Our mobile apps let you track time on the go and offers location tracking via GPS.</p>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="col-12 pl-0 pr-0">
            <div className="float-left col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-3">
              <h6 className="text-left">Online Timesheets & Reports</h6>
              <p className="text-justify">All time tracked with WizDepot is able to be viewed in the reports and timesheets. The reports can be customized to include the data you need, and the timesheets can be used to calculate how much to pay your team for their time worked. WizDepot helps teams stay organized and ensures that time is always accounted for and that workers can easily be paid.</p>
            </div>
            <div className="float-right col-xl-6 col-lg-6 col-md-6 col-sm-12 pr-0">
            <img alt="" style={{ width: "100%", height: "100%" }} src={require("./assets/img/timesheet.png").default}/>
            </div>
          </div>
        </div>
    </div>
  );
  }
}

export default withRouter(RegisterForm);