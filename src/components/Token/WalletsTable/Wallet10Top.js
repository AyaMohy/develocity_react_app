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


const Wallet10Top = ({ topWalletData }) => {
    const wallet = [];

    if (topWalletData && topWalletData.ownerInfo && topWalletData.ownerInfo.top10LiquidityHolder) {

        for (let i = 0; i < topWalletData.ownerInfo.top10LiquidityHolder.length; i++) {
            let rank = i + 1;
            let address = topWalletData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(0, 8) + '...' + topWalletData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(-6);
            let nameTag = 'N/A'
            let balance = (topWalletData.ownerInfo.top10LiquidityHolder[i].TokenHolderQuantity).substr(0, 9)
            let percentage = `${Number(topWalletData.ownerInfo.top10LiquidityHolder[i].percentage).toFixed(2)}%`;
            wallet.push({ rank, address, nameTag, balance, percentage });

        }
    }
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

export default Wallet10Top