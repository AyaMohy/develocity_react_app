import { LeftBarToken } from '../../components/Token/Leftheader/LeftBarToken'
import { NavBar } from '../../components/Home/Header/NavBar'
import Search from '../../components/Home/Search/MySearch'
import TrustScore from '../../components/Token/TrustScore/TrustScore'
import { ContractProgrssCard } from '../../components/Token/ContractProgrss/ContractProgrssCard'
import { ContractAnalysisCard } from '../../components/Token/ContractAnalysis/ContractAnalysisCard'
import { LiquidProgressCard } from '../../components/Token/LiquidProgress/LiquidProgressCard'
import { HoneypotCard } from '../../components/Token/Honeypot/HoneypotCard'
import { RugpullCard } from '../../components/Token/Rugpull/RugpullCard'
import { GeneralProgrssCard } from '../../components/Token/GeneralProgress/GeneralProgrssCard'
import Distribution from '../../components/Token/Distribution/Distribution'
import BreadCrumbBar from '../../components/Token/BreadCrumbBar/BreadCrumbBar'
import WalletsSection from '../../components/Token/WalletsSection/WalletsSection'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTokenOwner } from '../../store/tokenOwnerSlice'
import { fetchWallet } from '../../store/topWalletSlice'
import TokenOwner from '../../components/Token/TokenOwner/TokenOwner'
import LockedTokens from '../../components/Token/LockedTokens/LockedTokens'
import LiquidtySection from '../../components/Token/LiquidtySection/LiquidtySection'
import { Trading } from '../../components/Token/Trading/Trading'
import { Slippage } from '../../components/Token/Slippage/Slippage'
import { LiquidityList } from '../../components/Token/LiquidityListGroup/LiquidityList'
import { Advertisetwo } from '../../components/Token/Advertise/Advertisetwo'
import { AdevertiseOne } from '../../components/Token/Advertise/AdevertiseOne'

export function Token() {
    const dispatch = useDispatch();
    const tokenOwnerData = useSelector(state => state.tokenOwner.tokenOwner);
    const topWalletData = useSelector(state => state.topWallet.topWallet);
    const tokenAddress = useSelector(state => state.contractAddress.contractAddress);

    useEffect(() => {
        dispatch(fetchTokenOwner(tokenAddress))
        dispatch(fetchWallet(tokenAddress))
    }, [dispatch, tokenAddress]);

    return (
        <>
            <div className="bg-white">

                <NavBar />
                <section className='container '>
                    <div className='d-flex mt-4 flex-wrap justify-content-between '>
                        <div className='col-12 col-lg-6'> <LeftBarToken /></div>
                        <div className=' col-12 col-lg-6'> <Search /></div>
                    </div>
                    <div><BreadCrumbBar /></div>

                    <div className='row mt-5'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <TrustScore />
                        </div>
                        <div className='col-12 col-lg-9'>
                            <div className='row'>
                                <div className='col-12 col-md-4'> <ContractProgrssCard /></div>
                                <div className='col-12 col-md-4'> <LiquidProgressCard /></div>
                                <div className='col-12 col-md-4'> <GeneralProgrssCard /></div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-4'><ContractAnalysisCard /></div>
                                <div className='col-12 col-md-4'>
                                    <div className='col-12'> <HoneypotCard /></div>
                                    <div className='col-12'> <RugpullCard /></div>
                                </div>
                                <div className='col-12 col-md-4'>
                                    <div className='col-12'><AdevertiseOne /></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row  align-items-center mb-5'>
                        <div className='col-lg-6 col-md-12'>
                            <Distribution />
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>

                                <WalletsSection walletsData={tokenOwnerData} topWalletData={topWalletData} />
                            </div>
                        </div>
                    </div>

                    <div className='row mb-5'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>

                                <TokenOwner tokenOwnerData={tokenOwnerData} />
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='wallets_table'>
                                <LockedTokens LockedTokensData={tokenOwnerData} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-6 mb-4 d-flex flex-column'>
                            <div className='d-md-flex justify-content-center'>
                                <Trading />
                                <LiquidityList />
                            </div>
                            <div className='d-md-flex  justify-content-center'>
                                <Slippage />
                                <Advertisetwo />
                            </div>

                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='wallets_table'>

                                <LiquidtySection LiquidtyData={topWalletData} />
                            </div>
                        </div>

                    </div>


                    <br />
                </section>

            </div>
        </>
    )
}