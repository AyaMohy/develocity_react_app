import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Wallet10Top from '../WalletsTable/Wallet10Top';
import WalletsTable from '../WalletsTable/WalletsTable';
import './WalletsSection.css'
const WalletsSection = ({ walletsData, topWalletData }) => {

    return (
        <>
            <Tabs defaultActiveKey="TopWallets" id="uncontrolled-tab-example" >
                <Tab eventKey="TopWallets" title="Top 10 Wallets" >
                    <Wallet10Top topWalletData={topWalletData} />
                </Tab>
                <Tab eventKey="LiquidityWallets" title="Top 10 Liquidity Wallets">
                    <WalletsTable walletsData={walletsData} />
                </Tab>
                {/* <Tab eventKey="TokenTransactions" title="Token Transactions">
                    <WalletsTable />
                </Tab> */}
            </Tabs>
        </>
    )
}

export default WalletsSection