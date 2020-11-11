import React from 'react';

const SoundlyInvestContext = React.createContext({
    propAddress: '',
    purchasePrice: '',
    downPayment: 0,
    interestRate: 0,
    loanPeriod: 0,
    rentalIncome: 0,
    storageIncome: 0,
    parkingIncome: 0,
    taxRate: 0,
    propertyManager: 0,
    insurance: 0,
    utilities: 0,
    gardener: 0,
    maintenance: 0,
    vacancyRate: 0,
});

export default SoundlyInvestContext;