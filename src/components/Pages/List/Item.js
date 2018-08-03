import React from 'react';
import CurrencyFormat from 'react-currency-format';

export default ({ car, selectCar }) => (
    <div className="column div" onClick={() => selectCar(car)}>
        <div className="div-item">
            <div className="div-item-up">
                <h2>{ car.title }</h2>
                <p>{`${car.model} - ${car.brand} - ${car.km} KM`}</p>
            </div>
            <div className="div-item-down">
                <CurrencyFormat value={car.price} displayType={'text'} thousandSeparator={true} prefix={'R$ '} renderText={value => <h2>{value}</h2>} />
                <p>{ car.year }</p>
            </div>
        </div>
        <hr className="div-line"/>
    </div>
);
