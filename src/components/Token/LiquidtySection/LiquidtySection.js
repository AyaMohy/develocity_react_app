import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import LiquidtyTable from '../LiquidtyTable/LiquidtyTable'

const LiquidtySection = () => {
    return (
        <>
            <Tabs defaultActiveKey="LiquidtyTransactions" id="uncontrolled-tab-example" >
                <Tab eventKey="LiquidtyTransactions" title="Liquidty Transactions" >
                    <LiquidtyTable />
                </Tab>
                <Tab eventKey="AddedLiquidity" title="Added Liquidity">
                    <LiquidtyTable />
                </Tab>
                <Tab eventKey="RemovedLiquidity" title="Removed Liquidity">
                    <LiquidtyTable />
                </Tab>
                <Tab eventKey="LockedLiquidity" title="Locked Liquidity">
                    <LiquidtyTable />
                </Tab>
            </Tabs></>
    )
}

export default LiquidtySection