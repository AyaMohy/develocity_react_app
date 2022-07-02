import styles from './LeftBarToken.module.css'
import { FaPaperPlane, FaTwitter, FaFacebookF, FaGithub, FaFirefoxBrowser, FaReddit, FaMediumM, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import bitcoinlogo from '../../../assets/images/bitcoin.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokenInfoResult } from '../../../Services/FetchTokenInfo';
import { useEffect, useState } from 'react';
import { AiFillWechat, AiTwotoneMail } from 'react-icons/ai';
import {IoCopy} from 'react-icons/io5'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export function LeftBarToken() {

    // const contractAddress = useSelector(state => state.contractAddress.contractAddress);
    const params = useParams();

    const contractAddress = params.contractAddress
    // console.log(contractAddress,'==================>>>>');
    const tokenData = useSelector(state => state.Gettokeninfodata.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTokenInfoResult(contractAddress));

    }, [dispatch, contractAddress]);

    const tokeninfodata = tokenData.result;
    console.log("token info", tokeninfodata)
    function foramtNumber(val) {
        return Number(val).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
    const [copiedAddress,setCopyAddress] = useState('Copy Address')
    function copyToClipboard(e) {
        setCopyAddress('Copied Address !')
        navigator.clipboard.writeText(contractAddress)

        setTimeout(() => {
            setCopyAddress('Copy Address')
        }, 2000);
    }

    return (
        <>
            <div className="d-flex me-5 flex-wrap w-100">
                <div className="flex-shrink-0">
                {
                    (tokeninfodata && tokeninfodata.contractInfo.logo)?  <img className={styles.tokenImg} src={tokeninfodata.contractInfo.logo} alt="bitcoin" />:
                    <div className={styles.icon_token_letter}>
                    <h6 className={styles.icon_token_text}>{tokeninfodata?tokeninfodata.contractInfo.name.charAt(0) :null}</h6>
                </div>
                }
                   
                </div>
                <div className="flex-grow-1 ms-3">
                    {/* top header */}
                    <div className="d-flex align-items-center">
                        <h3 style={{ fontFamily: 'SF Pro Display Semibold' }}>{tokeninfodata ?(tokeninfodata.contractInfo.name) : null} </h3>
                        <span className="px-3 h-50 fw-light mx-3" style={{ fontSize: '14px', backgroundColor: 'rgba(136, 136, 136,0.2)' }}>{tokeninfodata ? tokeninfodata.contractInfo.symbol : null}</span>
                        <span className='me-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#9F4AE8" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                        <div className=' flex-grow-1'>
                            <ul className={styles.socialIcons}>
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.website ? <li>
                                        <a href={tokeninfodata.contractInfo.website} target="_blank" rel="noopener noreferrer">
                                            <FaFirefoxBrowser />
                                        </a>
                                    </li> : null}
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.twitter ? <li>
                                        <a href={tokeninfodata.contractInfo.twitter} target="_blank" rel="noopener noreferrer">
                                            <FaTwitter />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.telegram ? <li>
                                        <a href={tokeninfodata.contractInfo.telegram} target="_blank" rel="noopener noreferrer">
                                            <FaPaperPlane />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.github ? <li>
                                        <a href={tokeninfodata.contractInfo.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.facebook ? <li>
                                        <a href={tokeninfodata.contractInfo.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.reddit ? <li>
                                        <a href={tokeninfodata.contractInfo.reddit} target="_blank" rel="noopener noreferrer">
                                            <FaReddit />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.medium ? <li>
                                        <a href={tokeninfodata.contractInfo.medium} target="_blank" rel="noopener noreferrer">
                                            <FaMediumM />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.email ? <li>
                                        <a href={`mailto:${tokeninfodata.contractInfo.email}`} target="_blank" rel="noopener noreferrer">
                                            <AiTwotoneMail />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.wechat ? <li>
                                        <a href={tokeninfodata.contractInfo.wechat} target="_blank" rel="noopener noreferrer">
                                            <AiFillWechat />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.linkedin ? <li>
                                        <a href={tokeninfodata.contractInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn />
                                        </a>
                                    </li> : null
                                }
                                {
                                    tokeninfodata && tokeninfodata.contractInfo.discord ? <li>
                                        <a href={tokeninfodata.contractInfo.discord} target="_blank" rel="noopener noreferrer">
                                            <FaDiscord />
                                        </a>
                                    </li> : null

                                }

                                {/* <li><a href="#"><FaPaperPlane /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaFacebookF /></a></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className='text-start d-flex justify-content-between'>
                        <span className='text-muted pe-2'>Contract Address </span>
                        <div>
                            <span 
                                value={contractAddress}
                                className='text-primary' 
                                style={{ fontFamily: 'SF Pro Display Medium' }} >
                                    {contractAddress ?`${contractAddress.slice(0,5)}...${contractAddress.slice(-5)}` : ''}</span>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copiedAddress}</Tooltip>}>
                                        <span onClick={copyToClipboard} className="d-inline-block">
                                            <IoCopy disabled style={{color:'#888' ,marginLeft:'4px'}}/>    
                                        </span>
                                    </OverlayTrigger>
                        </div>
                    </div>

                    <div className={`text-start mt-2 d-flex justify-content-between flex-wrap ${styles.badges}`} style={{ fontSize: '12px', fontFamily: 'SF Pro Display Regular' }}>
                        <span className='d-flex w-auto align-items-center px-2 py-1  mt-2 d-inline-block' style={{ backgroundColor: 'rgba(136, 136, 136,0.2)' }}>
                            <img className='rounded-circle' width={18} src={tokeninfodata?.contractInfo?.logo ? tokeninfodata?.contractInfo?.logo : null} alt="bitcoin" />
                            <span style={{ fontFamily: 'SF Pro Display Medium' }} className='ps-1'>{tokeninfodata ? tokeninfodata?.contractInfo?.symbol : null}</span>
                        </span>
                        <span className='px-2 py-1 mt-2 d-inline-block' style={{ backgroundColor: 'rgba(136, 136, 136,0.2)' }}>Total Scan {tokeninfodata ? (tokeninfodata?.interest) : null}</span>
                        <span className='px-2 py-1 mt-2 d-inline-block' style={{ backgroundColor: 'rgba(136, 136, 136,0.2)' }}>Launched {tokeninfodata ? (tokeninfodata?.contractInfo?.age.split("T"))[0] : null}</span>
                        <span className='px-2 py-1 mt-2 d-inline-block' style={{ backgroundColor: 'rgba(136, 136, 136,0.2)' }}>Added {tokeninfodata ? (tokeninfodata?.createdAt.split("T"))[0] : null}</span>
                                
                    </div>
                    <div className={`d-flex justify-content-between flex-wrap mt-4 mb-4 ${styles.percent}`}>
                        <div className='text-start'>
                            <h5 className='text-muted' style={{ fontFamily: 'SF Pro Display Regular' }}>Current Price</h5>
                            <p className='mb-2' style={{ fontFamily: 'SF Pro Display Semibold' }}>${tokeninfodata ?(tokeninfodata.contractInfo.tokenPriceUSD) : null}</p>
                            {/* <p className='text-success mt-0 fw-bold' style={{   fontFamily: 'SF Pro Display Medium'}}>1.7 %</p> */}
                        </div>
                        <div className='text-start'>
                            <h5 className='text-muted' style={{ fontFamily: 'SF Pro Display Regular' }}>Market Cap</h5>
                            <p className='fs-5 mb-2' style={{ fontFamily: 'SF Pro Display Semibold' }}>${tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.market_cap) : null}</p>
                            {/* <p className='text-danger fw-bold mt-0 0' style={{   fontFamily: 'SF Pro Display Medium'}}>1.7 %</p> */}
                        </div>
                        <div className='text-start'>
                            <h5 className='text-muted' style={{ fontFamily: 'SF Pro Display Regular' }}>Total Supply</h5>
                            <p className='fs-5 mb-2' style={{ fontFamily: 'SF Pro Display Semibold' }}>{tokeninfodata ? foramtNumber(tokeninfodata.contractInfo.total_supply) : null} {tokeninfodata ? tokeninfodata.contractInfo.symbol : null}</p>
                            {/* <p className='fw-bold mt-0 ' style={{   fontFamily: 'SF Pro Display Medium'}}></p> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}