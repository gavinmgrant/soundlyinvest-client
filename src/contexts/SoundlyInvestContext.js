import React from 'react';

const SoundlyInvestContext = React.createContext({
    propAddress: '',
    purchasePrice: '',
    downPayment: '',
    interestRate: '',
    loanPeriod: '',
    rentalIncome: '',
    storageIncome: '',
    parkingIncome: '',
    taxRate: '',
    propertyManager: '',
    insurance: '',
    utilities: '',
    gardener: '',
    miscellaneous: '',
    vacancyRate: '',
});

export default SoundlyInvestContext;