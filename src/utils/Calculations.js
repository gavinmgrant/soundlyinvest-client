import { useContext } from 'react';
import SoundlyInvestContext from '../contexts/SoundlyInvestContext';

export function DownPaymentAmount() {
    const context = useContext(SoundlyInvestContext);
    const rawDownPayment = (context.downPayment/100) * context.purchasePrice;

    return Math.round(rawDownPayment);
}; 

export function MonthlyLoanPayment() {
    const context = useContext(SoundlyInvestContext);

    const dpAmt = (context.downPayment/100) * context.purchasePrice;
    const P = context.purchasePrice - dpAmt; // principle amount
    const I = (context.interestRate / 100) / 12; // monthly interest rate
    const N = context.loanPeriod * 12; // number of payments months
    const M = monthlyPayment(P, N, I); // monthly mortgage payment

    return Math.round(M);
};

function monthlyPayment(p, n, i) {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
};

export function TotalIncome() {
    const context = useContext(SoundlyInvestContext);
    const total = parseInt(context.rentalIncome) + parseInt(context.storageIncome) + parseInt(context.parkingIncome);

    return total;
};

export function TaxAmount() {
    const context = useContext(SoundlyInvestContext);
    const annualTax = context.purchasePrice * (context.taxRate/100)

    return Math.round(annualTax / 12);
};

export function VacancyAmount() {
    const context = useContext(SoundlyInvestContext);

    return TotalIncome() * (context.vacancyRate/100);  
};

export function TotalExpenses() {
    const context = useContext(SoundlyInvestContext);

    return TaxAmount() + parseInt(context.propertyManager) + parseInt(context.insurance) + parseInt(context.utilities) + parseInt(context.gardener) + parseInt(context.maintenance) + VacancyAmount();
};

export function GRM() {
    const context = useContext(SoundlyInvestContext);
    const rawGRM = context.purchasePrice / (TotalIncome() * 12)

    return rawGRM.toFixed(2);
};

export function MonthlyNOI() {
    return TotalIncome() - TotalExpenses(); 
};

export function YearlyNOI() {
    return MonthlyNOI() * 12;
};

export function CashFlow() {
    return MonthlyNOI() - MonthlyLoanPayment();
};

export function CapRate() {
    const context = useContext(SoundlyInvestContext);
    const rawCap = (YearlyNOI() / context.purchasePrice) * 100;

    return rawCap.toFixed(2);
};