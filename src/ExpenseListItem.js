import React from 'react';
import './ExpenseListItem.css'
export default function ExpenseListItem({ transaction }) {

    
    return (
        <div  className="card">
            <h3  className="item-title description">{transaction.description}</h3>
            <h3 className="item-title amount">-{transaction.amount}</h3>

        </div>
    );
}