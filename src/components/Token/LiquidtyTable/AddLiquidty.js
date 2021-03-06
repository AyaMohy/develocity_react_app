import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';




const columns = [
    {
        dataField: "transaction",
        text: "Transaction",
    },
    {
        dataField: "fromAddress",
        text: "From Address",
    },
    {
        dataField: "toAddress",
        text: "To Address",
    },

    {
        dataField: "amount",
        text: "Amount"
    },
    {
        dataField: "currency",
        text: "Currency"
    }
];


const AddedLiquidity = ({ LiquidtyData }) => {
console.log('LiquidtyData===============',LiquidtyData);

    let AddLiquidtyData = []
    if (LiquidtyData && LiquidtyData.addLiquidityTransaction) {
        console.log(LiquidtyData.addLiquidityTransaction);
        for (let i = 0; i < LiquidtyData.addLiquidityTransaction.length; i++) {
            let fromAddress = LiquidtyData.addLiquidityTransaction[i].sender.substr(0, 3) + '...' + LiquidtyData.addLiquidityTransaction[i].sender.substr(-4);
            let toAddress = LiquidtyData.addLiquidityTransaction[i].receiver.substr(0, 3) + '...' + LiquidtyData.addLiquidityTransaction[i].receiver.substr(-4);
            let amount = LiquidtyData.addLiquidityTransaction[i].amount.substr(0, 5)
            let transaction = LiquidtyData.addLiquidityTransaction[i].transaction.substr(0, 3) + '...' + LiquidtyData.addLiquidityTransaction[i].transaction.substr(-4);
            let currency = LiquidtyData.addLiquidityTransaction[i].currency;

            AddLiquidtyData.push({ transaction, fromAddress, toAddress, amount, currency });
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
        <BootstrapTable
            keyField="id"
            data={AddLiquidtyData}
            columns={columns}
            hover={true}
            bordered={false}
            loading={true}
            pagination={pagination}
            alwaysShowAllBtns={true}
        />
    )
}

export default AddedLiquidity