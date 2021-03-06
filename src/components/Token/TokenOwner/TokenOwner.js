import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import HeaderText from '../HeaderText/HeaderText';
import "./TokenOwner.css"



const columns = [
    {
        dataField: "address",
        text: "Address",
    },
    {
        dataField: "ownership",
        text: "Ownership",
        formatter: (cell, row) => {
            return (
                <div>
                    {row.ownership ? <span className="token_owner_rennounced">Rennounced</span> : <span className="token_owner_not_rennounced">Not Rennounced</span>}
                </div>

            )
        }
    },
    {
        dataField: "liquidity",
        text: "Liquidity",
        formatter: (cell, row) => {
            return (
                <div className='token_owner_liquidity'>
                    <p className='liquidity'>{row.liquidity.liquidity}</p>
                    <p className='rate'>{row.liquidity.rate}</p>
                </div>
            )
        }
    },
    {
        dataField: "tokens",
        text: "Tokens",
        formatter: (cell, row) => {
            return (
                <div className='token_owner_tokens'>
                    <p className='tokens'>{row.tokens.tokens}</p>
                    <p className='rate'>{row.tokens.rate}</p>
                    <p className='price'>{row.tokens.price}</p>
                </div>
            )
        }
    }
];

const TokenOwner = ({ tokenOwnerData }) => {
    const OwnerData = [];

    if (tokenOwnerData && tokenOwnerData.ownerInfo) {
        const address = tokenOwnerData.ownerInfo.ownerAddress.substr(0, 8) + '...' + tokenOwnerData.ownerInfo.ownerAddress.substr(-6);
        const renounceOwnership = tokenOwnerData.ownerInfo.renounceOwnership;
        const tokenBalance = tokenOwnerData.ownerInfo.tokenBalance;
        const tokenBalance_percentage = tokenOwnerData.ownerInfo.tokenBalance_percentage;
        const lockedLiquidity = tokenOwnerData.ownerInfo.lockedLiquidity;
        OwnerData.push({ address: address, ownership: renounceOwnership, liquidity: { liquidity: lockedLiquidity, rate: tokenBalance_percentage }, tokens: { tokens: tokenBalance, rate: tokenBalance_percentage, price: '287,547$' } });
    }

    return (
        <>
            <HeaderText nameHeader="Token Owner" />
            <BootstrapTable
                keyField="id"
                data={OwnerData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                alwaysShowAllBtns={true}
            />
        </>
    )
}

export default TokenOwner