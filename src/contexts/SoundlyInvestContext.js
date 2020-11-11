import React from 'react';

const SoundlyInvestContext = React.createContext({
    propAddress: '',
    purchasePrice: null,
    downPayment: null,
    interestRate: null,
    loanPeriod: null,
    rentalIncome: null,
    storageIncome: null,
    parkingIncome: null,
    taxRate: null,
    propertyManager: null,
    insurance: null,
    utilities: null,
    gardener: null,
    maintenance: null,
    vacancyRate: null,
});

export default SoundlyInvestContext;