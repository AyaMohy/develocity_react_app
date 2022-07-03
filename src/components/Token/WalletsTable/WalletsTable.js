import { logDOM } from '@testing-library/react';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./WalletsTable.css";





const columns = [
    {
        dataField: "rank",
        text: "Rank",
    },
    {
        dataField: "address",
        text: "Address",
    },
    {
        dataField: "nameTag",
        text: "Name Tag"
    },
    {
        dataField: "balance",
        text: "Balance"
    },
    {
        dataField: "percentage",
        text: "Percentage"
    }
];


const WalletsTable = ({ walletsData }) => {
    const wallet = [];

    if (walletsData && walletsData.ownerInfo && walletsData.ownerInfo.top10LiquidityHolder) {

        for (let i = 0; i < walletsData.ownerInfo.top10LiquidityHolder.length; i++) {
            let rank = i + 1;
            let address = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(0, 8) + '...' + walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(-6);
            let nameTag = 'N/A'
            let balance = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderQuantity;
            let percentage = `${(Number(walletsData.ownerInfo.top10LiquidityHolder[i].percentage)).toFixed(2)}%`;
            wallet.push({ rank, address, nameTag, balance, percentage });

        }
    }

    console.log("wallet",wallet)

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        hideSizePerPage: true,
        nextPageText: '>',
        prePageText: '<',
        withFirstAndLast: false,
        alwaysShowAllBtns: true,
    });

    return (
        <>
            <BootstrapTable
                keyField="id"
                data={wallet}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
            />
        </>

    )
}

export default WalletsTable