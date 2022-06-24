import React from "react";
import {ButtonComponent} from './common/ButtonComponent'
import { Link } from "react-router-dom";
import styles from './nav.module.css'
import logo from '../assets/logo.png'
export function NavDisplay(){
    const logindata={
        text:'Login',
        color:"black",
        bg:"#fff",
        border:'1px solid black'
    }
    const registerdata={
        text:'Create Account',
        color:"white",
        bg:"#000"
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg  " style={{backgroundColor:'#F3F2F7'}}>
                <div className="container align-items-center" style={{marginTop:'45px',marginBottom:'45px'}}>
                    <a className="navbar-brand" href="#">
                        <img width="50" src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" style={{boxShadow:'none'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles['navbar-collapse']}`}  id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 w-100 mb-lg-0" style={{marginLeft:'46px'}}>
                        <div className="d-lg-flex w-100 justify-content-between align-items-center">
                        <div className="d-lg-flex">
                            <li className="nav-item  px-3">
                            <Link className={`nav-link text-black ${styles.linkitem}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item px-3">
                            <Link className={`nav-link text-black ${styles.linkitem}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link className={`nav-link text-black ${styles.linkitem}`} to="token">Token</Link>
                               
                            </li>
                            <li className="nav-item px-3">
                                <a className={`nav-link text-black ${styles.linkitem}`}>Academy</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className={`nav-link text-black ${styles.linkitem}`}>Contact</a>
                            </li>
                        </div>
                        <div className="d-lg-flex me-3">
                            <li className="nav-item">
                                <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={logindata}/>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={registerdata}/>
                            </a>
                            </li>
                        </div>
                       

                    
                        </div>
                    </ul>
                    </div>
                    
                </div>
                
            </nav>
            <div className=" container" >
                <hr class="dropdown-divider container"/> 
            </div>
        </>
    )
}