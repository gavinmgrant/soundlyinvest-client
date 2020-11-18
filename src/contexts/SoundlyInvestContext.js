import React from 'react';

const SoundlyInvestContext = React.createContext({
    reportid: 0,
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
    reports: [],
    addReport: () => {},
    deleteReport: () => {},
    updateReport: () => {},
});

export default SoundlyInvestContext;