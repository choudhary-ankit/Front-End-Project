import React, { Component } from 'react';
import Style from './Payment.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Link} from '@material-ui/core';


export default class Payment extends Component {
    constructor(props){
        super(props)
        this.state ={
            open:"",
            activeStep:0,
            steps:["Card Details", "Payment OTP", "Verify OTP"],
            setActiveStep:"",
            card_name:"",
            card_no:"",
            card_exp:"",    
            card_cv:"",
            mobile_no:"",
            mobile_otp:"",
            generate_otp:"",
            otp_responce:"",

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleNext = () => {
        if(this.state.activeStep ===0){
            if(this.state.card_name.length===0){
                alert("plz fill CardHolder Name")
            }
            else if(this.state.card_no.length<12){
                alert("your are enter wrong card no")
            }
            else if(this.state.card_exp.length<5){
                alert("you are enter wrong expire date")
            }
            else if(this.state.card_cv.length<3){
                alert("you are enter wrong cv")
            }
            else{
                this.setState({
                    activeStep:this.state.activeStep+1
                    
                })
            }
            
        }
        else if(this.state.activeStep===1){
            if(this.state.mobile_no.length===10){
                let otp = Math.floor(100000 + Math.random() * 900000);   
                otp = String(otp);
                otp = otp.substring(0,4);
                axios.get(`https://www.fast2sms.com/dev/bulk?authorization=0jh4qaoEiJWONkwOujpPL86Ux5gBxV23uiwx3e1QJsG4Blz12NAKIk0isDMB&sender_id=FSTSMS&message=your online purchasing movie ticket OTP is ${otp}&variables={AA}&variables_values=5252&language=english&route=p&numbers=${this.state.mobile_no}`)
                .then(response => 
                    this.setState({otp_responce: response})  
                )
                .catch(err => alert("ERROR"));
                this.setState({
                    generate_otp:otp,
                    activeStep:this.state.activeStep+1
                    
                })
            }
            else{
                alert("plz fill correct mobile no")
            }
        }
        else if(this.state.activeStep===2){
            if(this.state.mobile_otp===this.state.generate_otp){
                let seat_no=localStorage.getItem("seat_no")
                axios.get(`https://www.fast2sms.com/dev/bulk?authorization=0jh4qaoEiJWONkwOujpPL86Ux5gBxV23uiwx3e1QJsG4Blz12NAKIk0isDMB&sender_id=FSTSMS&message=Congratulation! ${this.state.card_name} your movie ticket is confirm and your seat no is ${seat_no} Thanks for choosing us&variables={AA}&variables_values=5252&language=english&route=p&numbers=${this.state.mobile_no}`)
                .then(response => 
                    this.setState({otp_responce: response})  
                )
                .catch(err => alert("ERROR"));
                
                this.setState({
                    activeStep:this.state.activeStep+1 
                })
            }
            else{
                alert("you are enter wrong otp")
            }
        }
        
      };
    
    handleBack = () => {
        this.setState({
            activeStep:this.state.activeStep-1
        })
      };
    
    handleReset = () => {
        this.setState({

            activeStep:0
        })
      };
    render() {
        console.log(this.state.otp_responce)
        return (
            <div className={Style.body}>
                <Card className={Style.root}>
                    <Stepper activeStep={this.state.activeStep} alternativeLabel>
                        {this.state.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <div>
                        {this.state.activeStep === this.state.steps.length ? 
                        (
                        <div className={Style.center}>
                            <div className={Style.payment_msg}>
                                <p>Congratulation! <br></br>Your payment is successfull</p>
                            </div>
                            <div className={Style.next_btn}>
                                <Link href="/user_info" style={{color:"white"}} underline="none">
                                    <Button variant="contained" color="primary">Ticket</Button>
                                </Link>
                            </div>
                        </div>
                        ) 
                        : 
                        (
                        <div className={Style.center}>
                            <div>
                                {
                                    this.state.activeStep === 0 ?
                                    (   
                                        <div>
                                            <div className={Style.textfield_div}>
                                                <Typography className={Style.instructions}>Card Holder Name:</Typography>
                                                <TextField  label="Full Name" variant="outlined" type="text" onChange={this.handleChange} name="card_name"/>
                                            </div>
                                            <div className={Style.textfield_div}>
                                                <Typography className={Style.instructions}>Card No:</Typography>
                                                <TextField  label="Enter your 12 Digit card No" variant="outlined" type="text" onChange={this.handleChange} name="card_no"/>
                                            </div>
                                            <div className={Style.expire_cv}>
                                                <TextField style={{width:"70px", height:"30px"}} label="MM/YY" variant="outlined" type="text" onChange={this.handleChange} name="card_exp"/>
                                                <TextField style={{width:"70px", height:"30px"}} label="Cv" variant="outlined" type="text" onChange={this.handleChange} name="card_cv"/>
                                            </div>
                                        </div>
                                    
                                    )
                                    : 
                                    this.state.activeStep === 1 ? 
                                    (
                                        <div>
                                            <div className={Style.note}>
                                                <p>NOTE:The Mobile OTP is send on your<br></br>Number is Just a prototype,<br></br>No any Bank trancation happning here,<br></br> y0u are feel free to submit wrong <br></br>card Details.</p>
                                            </div>
                                            <div className={Style.textfield_mob}>
                                                <Typography className={Style.instructions}>Mobile No:</Typography>
                                                <TextField  label="Enter your mobile no" variant="outlined" type="text" onChange={this.handleChange} name="mobile_no"/>
                                            </div>
                                        </div>
                                    )
                                    :
                                    (   <div>
                                            <div className={Style.note}>
                                                <p>NOTE:The Mobile OTP is send on your<br></br>Number is Just a prototype,<br></br>No any Bank trancation happning here,<br></br> you are feel free to submit wrong <br></br>card Details.</p>
                                            </div>
                                            <div className={Style.textfield_mob}>
                                                <Typography className={Style.instructions}>Verify OTP:</Typography>
                                                <TextField  label="Enter OTP" variant="outlined" type="text" onChange={this.handleChange} name="mobile_otp"/>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div className={Style.next_btn}>
                                <Button
                                    disabled={this.state.activeStep === 0}
                                    onClick={this.handleBack}
                                    className={Style.backButton}
                                >Back</Button>
                                <Button variant="contained" color="primary" onClick={this.handleNext}>
                                    {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                        )}
                    </div>
                </Card>
            </div>
        )
    }
}