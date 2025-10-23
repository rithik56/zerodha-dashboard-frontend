// ============================================ 
// src/components/Dashboard/PortfolioDashboard.jsx 
// ============================================ 
import React from 'react'; 
import { TrendingUp, DollarSign } from 'lucide-react'; 
import { useHoldings } from '../../hooks/useHoldings'; 
import { useAuth } from '../../hooks/useAuth'; 
import { DashboardHeader } from './DashboardHeader'; 
import { SummaryCard } from './SummaryCard'; 
import { HoldingsTable } from './HoldingsTable'; 
import { ErrorMessage } from '../UI/ErrorMessage'; 

export default function PortfolioDashboard() { 
  const { isAuthenticated, loginUrl } = useAuth(); 
  const { holdings, summary, loading, error, refetch } = useHoldings(isAuthenticated); 

  return ( 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6"> 
      <div className="max-w-7xl mx-auto"> 
        <DashboardHeader 
          onRefresh={refetch} 
          isRefreshing={loading} 
          isAuthenticated={isAuthenticated} 
          loginUrl={loginUrl} 
        /> 

        {/* Summary Cards */} 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"> 
          <SummaryCard 
            icon={DollarSign} 
            label="Total Investment" 
            value={summary.totalInvestment} 
          /> 
          <SummaryCard 
            icon={DollarSign} 
            label="Current Value" 
            value={summary.currentValue} 
          /> 
          <SummaryCard 
            icon={TrendingUp} 
            label="Total P&L" 
            value={summary.totalPnL} 
            isPnL 
          /> 
          <SummaryCard 
            icon={TrendingUp} 
            label="P&L %" 
            value={summary.totalPnLPercentage} 
            isPnL 
          /> 
        </div> 

        {/* Error Message */} 
        {error && ( 
          <ErrorMessage 
            message={error} 
            onRetry={refetch} 
            loginUrl={!isAuthenticated ? loginUrl : null} 
          /> 
        )} 

        {/* Holdings Table */} 
        <HoldingsTable holdings={holdings} loading={loading} /> 
      </div> 
    </div> 
  ); 
}