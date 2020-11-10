import React from 'react';

const SoundlyInvestContext = React.createContext({
    propAddress: '',
    purchasePrice: null,
    downPayment: null,
});

export default SoundlyInvestContext;