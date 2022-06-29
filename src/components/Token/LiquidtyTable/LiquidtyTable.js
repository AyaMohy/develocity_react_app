import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export const productsGenerator = quantity => {
    const items = [];
    for (let i = 1; i < quantity; i++) {
        items.push({ rank: i, fromAddress: `0xc4da...0230`, toAddress: '0x54ed...1e81', amount: '5,522.58', txnHash: '0x8b3c...c8d2' });
    }
    return items;
};

const products = productsGenerator(117);

const columns = [
    {
        dataField: "rank",
        text: "Rank",
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
        dataField: "txnHash",
        text: "Txn Hash"
    }
];


const LiquidtyTable = () => {

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
            data={products}
            columns={columns}
            hover={true}
            bordered={false}
            loading={true}
            pagination={pagination}
            alwaysShowAllBtns={true}
        />
    )
}

export default LiquidtyTable