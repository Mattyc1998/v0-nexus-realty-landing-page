"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NeighborhoodExplorer = () => {
  const router = useRouter();
  const [income, setIncome] = useState("");
  const [deposit, setDeposit] = useState("");
  const [monthlyOutgoings, setMonthlyOutgoings] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    maxBorrow: 0,
    totalBudget: 0,
    monthlyPayment: 0,
  });

  const calculateAffordability = (e: React.FormEvent) => {
    e.preventDefault();
    
    const annualIncome = parseFloat(income) || 0;
    const depositAmount = parseFloat(deposit) || 0;
    const outgoings = parseFloat(monthlyOutgoings) || 0;

    // Typical lending: 4.5x annual income
    const maxBorrow = annualIncome * 4.5;
    const totalBudget = maxBorrow + depositAmount;
    
    // Monthly payment estimate (assuming 5% interest over 25 years)
    const monthlyInterestRate = 0.05 / 12;
    const numberOfPayments = 25 * 12;
    const monthlyPayment = maxBorrow > 0 
      ? (maxBorrow * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
      : 0;

    setResults({
      maxBorrow,
      totalBudget,
      monthlyPayment,
    });
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleViewProperties = () => {
    router.push('/properties');
  };

  const handleGetAdvice = () => {
    router.push('/contact');
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            MORTGAGE CALCULATOR
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Much Can You Afford?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get an instant estimate of your borrowing power and see what homes are within your budget
          </p>
        </header>

        {/* Calculator Form */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-8">
          <form onSubmit={calculateAffordability} className="space-y-6">
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-foreground mb-2">
                Annual Income (before tax)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <input
                  id="income"
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="50000"
                  className="w-full rounded-lg border border-border bg-background pl-8 pr-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="deposit" className="block text-sm font-medium text-foreground mb-2">
                Deposit Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <input
                  id="deposit"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  placeholder="30000"
                  className="w-full rounded-lg border border-border bg-background pl-8 pr-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="outgoings" className="block text-sm font-medium text-foreground mb-2">
                Monthly Outgoings (loans, credit cards, etc.)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <input
                  id="outgoings"
                  type="number"
                  value={monthlyOutgoings}
                  onChange={(e) => setMonthlyOutgoings(e.target.value)}
                  placeholder="500"
                  className="w-full rounded-lg border border-border bg-background pl-8 pr-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Include car loans, student loans, credit card payments, etc.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Calculate My Budget
            </button>
          </form>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-6">
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-background p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Your Estimated Borrowing Power
              </h3>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Maximum Mortgage</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(results.maxBorrow)}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Total Budget</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatCurrency(results.totalBudget)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (Mortgage + Deposit)
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Est. Monthly Payment</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(results.monthlyPayment)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    At 5% over 25 years
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Based on your budget, you can afford properties up to <span className="font-semibold text-foreground">{formatCurrency(results.totalBudget)}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={handleViewProperties}
                    className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    View Properties in Your Budget
                  </button>
                  <button 
                    onClick={handleGetAdvice}
                    className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
                  >
                    Get Mortgage Advice
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground">
                💡 <strong className="text-foreground">Important:</strong> This is an estimate only. Actual borrowing amounts depend on credit score, employment status, and lender criteria. Speak to a mortgage advisor for personalized advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};