import styles from './LeftBarToken.module.css'
import {FaPaperPlane} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa'
import bitcoinlogo from '../../../assets/images/bitcoin.png'
import bsclogo from '../../../assets/images/BSC.png'
export function LeftBarToken(){
    return(
        <>
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img width={50} src={bitcoinlogo} alt="bitcoin"/>
                </div>
                <div class="flex-grow-1 ms-3">
                    {/* top header */}
                    <div className="d-flex align-items-center">
                        <h3>Bitcoin </h3>
                        <span className="px-3 h-50 fw-light mx-3" style={{fontSize:'14px',backgroundColor:'rgba(136, 136, 136,0.2)'}}>$BTC</span>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#9F4AE8" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        </span>
                        <div className=' flex-grow-1'>
                            <ul className={styles.socialIcons}>
                                <li><a href="#"><FaPaperPlane/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaFacebookF/></a></li>
                            </ul>
                        </div>
                    </div>
                  
                    <div className=' text-start'>
                        <span className='text-muted pe-2'>Contract Address</span>
                        <span className='text-primary'>bbbbbbbbbbbbb</span>
                    </div>

                    <div className='text-start mt-2 d-flex flex-wrap' style={{fontSize:'14px'}}>
                        <span className='px-1 py-1 me-2 mt-2 d-inline-block' style={{backgroundColor:'rgba(136, 136, 136,0.2)'}}>Rank #3</span>
                        <span className='d-flex align-items-center px-2 py-1 me-2 mt-2 d-inline-block' style={{backgroundColor:'rgba(136, 136, 136,0.2)'}}>
                            <img width={18} src={bsclogo} alt="bitcoin"/>
                            <span className='ps-1'>BSC</span>
                            </span>
                        <span className='px-2 py-1 me-2 mt-2 d-inline-block' style={{backgroundColor:'rgba(136, 136, 136,0.2)'}}>Launched sep 24th 2021</span>
                        <span className='px-2 py-1 mt-2 d-inline-block' style={{backgroundColor:'rgba(136, 136, 136,0.2)'}}>Added May 5th 2022</span>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='text-start'>
                            <h5 className='text-muted'>Current Price</h5>
                            <p className='fs-4 mb-2'>$2698</p>
                            <p className='text-success mt-0 fw-bold'>1.7 %</p>
                        </div>
                        <div className='text-start'>
                            <h5 className='text-muted'>Market Cap</h5>
                            <p className='fs-4 mb-2'>$2698</p>
                            <p className='text-danger fw-bold mt-0 '>1.7 %</p>
                        </div>
                        <div className='text-start'>
                            <h5 className='text-muted'>Total Price</h5>
                            <p className='fs-4 mb-2'>2698 BTC</p>
                            <p className='fw-bold mt-0 '></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}