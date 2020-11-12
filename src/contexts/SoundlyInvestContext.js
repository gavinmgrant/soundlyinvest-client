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
    pagePurchase: false,
    pageIncome: false,
    pageExpenses: false,
    pageReport: false,
});

export default SoundlyInvestContext;