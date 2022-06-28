import {LeftBarToken} from '../../components/Token/Leftheader/LeftBarToken'
import {NavBar} from '../../components/Home/Header/NavBar'
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

export function Token(){
    return(
        <>
            <div className="bg-white">
               
                <NavBar/>
                <section className='container '>
                <div className='d-flex mt-4 flex-wrap justify-content-between '>
                    <div className='col-12 col-md-5'> <LeftBarToken/></div>
                    <div className=' col-12 col-md-5'> <Search/></div>
                </div>
                <div><BreadCrumbBar/></div>
                <div className='d-flex flex-wrap justify-content-center justify-content-sm-between'>
                    <div className='mt-5'><TrustScore/></div>
                    <div className='d-flex flex-column mt-5'>
                        <ContractProgrssCard/>
                        <ContractAnalysisCard/>
                    </div>
                    <div className='d-flex flex-column mt-5'>
                        <LiquidProgressCard/>
                        <HoneypotCard/>
                        <RugpullCard/>
                    </div>
                    <div className='mt-5'>
                        <GeneralProgrssCard/>
                    </div>
                </div>

                <div>
                    <Distribution/>
                </div>
              
                <br/>
                </section>  
            </div>
        </>
    )
}