import React, { Fragment , useState } from "react";
import ReactDOM from 'react-dom';
import {useForm , FormProvider , useFormContext , Controller, get} from "react-hook-form";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import {GrUpload} from "react-icons/gr";
import {FaFacebookF ,FaTelegramPlane} from "react-icons/fa";
import {BsYoutube , BsTwitter} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai"
import styles from "./ModalForm.module.css";
import { useTranslation } from 'react-i18next';


const steps = ['Token Details', 'Logo', 'Short Bio' , 'Social Media'];


const BackDrop =({close , show}) =>{
  const { t, i18n } = useTranslation(["common"])
  const lang=localStorage.getItem("i18nextLng")
    return(
        <div className={`${styles.backDrop} ${show? styles.show : null}`} onClick={()=>close()}></div>
    )
}

const Overlay =({show , close}) =>{

  const useStyles = styled(() => ({
    root: {
      " & .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": { color: " #9F4AE8 !important" }
     
    }
  }));

  const c = useStyles();

  function getSteps() {
   
    return ["step 1", "step 2", "step 3"];
  }
  
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Fragment>
          <h1 className={styles.title}>Submit your token</h1>
          <p className={styles.subTitle}>Details about your token</p>
          <input type="text" placeholder="Contract Address" className={styles.inputField}/>
          <div className={styles.inputs}>
          <div className={styles.inputBlock}>
          <label>Name</label>
          <input type="text"  className={styles.inputField2}/>
          </div>
          <div className={styles.inputBlock}>
          <label>Current Price</label>
          <input type="text"  className={styles.inputField2}/>
          </div>
          </div>
          <div className={styles.inputs}>
          <div className={styles.inputBlock}>
          <label>Symbol</label>
          <input type="text"  className={styles.inputField2}/>
          </div>
          <div className={styles.inputBlock}>
          <label>Network</label>
          <input type="text"  className={styles.inputField2}/>
          </div>
          </div>
          <div className={styles.inputs}>
          <div className={styles.inputBlock}>
          <label>Is token audited?</label>
          <select className={styles.select}>
          <option>No</option>
          <option>Yes</option>
          </select>
          </div>
          
          </div>
          <input type="checkbox" id="agreement" name="agreement" value="agreement"/>
  <label for="agreement" className={styles.agree}> By enter your token information you agree on Develocity's <a href="#">Terms & Conditions</a> </label>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
          <h1 className={styles.title}>Submit your token</h1>
          <p className={styles.subTitle}>Upload logo for token</p>
          <div className={styles.upload}>
          <input type="file" onChange={(e)=>uploadHandler} value={upload}/>
          <button className={styles.uploadBtn} onClick={()=>uploading}><GrUpload className={styles.uploadIcon}/><br/>Drag & Drop or Browse</button>
          </div>
          <p className={styles.uploadText}>Uploaded image size should be minimum 200x200 pixels Allowed file extensions: .JPEG .JPG .PNG</p>

          </Fragment>
        );
      case 2:
        return (
          <Fragment>
          <h1 className={styles.title}>Submit your token</h1>
          <p className={styles.subTitle}>Tell us about your token</p>
          <textarea className={styles.comment} placeholder="Token Bio"></textarea>
          <p className={styles.note}>Maximum 500 Characters</p>
          </Fragment>
        );
        case 3:
          return(
            <Fragment>
          <h1 className={styles.title}>Submit your token</h1>
          <p className={styles.subTitle}>Where to find your token</p>
          <div className="input-group mb-3">
  <div className="input-group-prepend">
    <h6 className={` input-group-text ${styles.socialIcon} ${styles.fbIcon}`} id="basic-addon1"><FaFacebookF/></h6>
  </div>
  <input type="text" className={`form-control ${styles.socialInput} ${styles.fb}`} placeholder="Facebook" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.youIcon}`} id="basic-addon1"><BsYoutube/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.you}`} placeholder=" Youtube" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.tweetIcon}`} id="basic-addon1"><BsTwitter/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.tweet}`} placeholder=" Twitter" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.teleIcon}`} id="basic-addon1"><FaTelegramPlane/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.tele}`} placeholder=" Telegram" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
          </Fragment>
            
          );
      default:
        return (
          <Fragment>
          
          </Fragment>
          
        );
    }
  }

  const methods = useForm();

    const [activeStep, setActiveStep] =useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [upload,setUpload] = useState();

    const uploadHandler = (e)=>{
      setUpload(e.target.files[0])
     
    }

    const uploading =() =>{
      axios.post("")
    }

    const isStepOptional = (step) => {
      
        return step === 1;
        
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }

       
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };

      const onSubmit =(data) =>{
        console.log(data)
      }
    
      const handleReset = () => {
        setActiveStep(0);
      };
    return(
        <div className={`${styles.overlay} ${show? styles.show2 : null}`}>
        <button className={styles.closeBtn} onClick={()=>close()}>Close x</button>

        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
          
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, display:"block !important" }}>
            <div className={styles.check}>
          <AiOutlineCheck className={styles.checkIcon}/>
          
          <p className={styles.subTitle}>Thanks !</p>
          <p className={styles.review}>It's under the review now.<br/>
          You'll receive email once it's approved.</p>
          <button className={styles.return} onClick={()=> close()}>Return to Website</button>
          </div>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}</form>
            </FormProvider>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between" , pt: 2 }}>
              <Button 
                color="inherit"
                
                disabled={activeStep === 0}
                hidden={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
             
              
  
              <Button  onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next Step'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
        
        </div>
    )
}
const ModalForm = ({show , close}) =>{

 

    return(
        
        <Fragment>
      {
        ReactDOM.createPortal(
            <Fragment>
            <BackDrop close={close} show={show}/>
            <Overlay show={show} close={close}/>
            </Fragment>,
            document.getElementById('ModalForm')
        )
      }
        
        
        
        </Fragment>
        
    )
};





export default ModalForm;