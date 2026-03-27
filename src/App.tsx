import React, { useState } from 'react'

const mockWallets = [
  { name: 'Binance', icon: '🟡', value: 4250, change: +2.3, assets: ['BTC', 'ETH', 'BNB', 'USDT'] },
  { name: 'Phantom', icon: '👻', value: 1850, change: +5.1, assets: ['SOL', 'IKB'] },
  { name: 'Trust Wallet', icon: '🛡️', value: 890, change: -1.2, assets: ['BTC', 'ETH'] },
  { name: 'MEXC', icon: '📈', value: 320, change: +0.8, assets: ['Altcoins'] },
  { name: 'Base', icon: '🔵', value: 450, change: +1.5, assets: ['ETH', 'USDC'] },
  { name: 'Solflare', icon: '🌟', value: 210, change: +3.2, assets: ['SOL'] },
]

export default function App() {
  const total = mockWallets.reduce((s, w) => s + w.value, 0)
  const [active, setActive] = useState('dashboard')

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 900, margin: '0 auto', padding: 20, background: '#0f172a', minHeight: '100vh', color: '#e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 32 }}>🐳</span>
        <div>
          <h1 style={{ margin: 0, fontSize: 24, color: '#38bdf8' }}>Whally Copilot</h1>
          <p style={{ margin: 0, fontSize: 12, color: '#64748b' }}>Multi-wallet crypto manager</p>
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #1e3a5f, #0f2942)', borderRadius: 16, padding: 24, marginBottom: 24, border: '1px solid #1e40af' }}>
        <p style={{ margin: '0 0 8px', color: '#94a3b8', fontSize: 14 }}>Portfolio Total</p>
        <h2 style={{ margin: 0, fontSize: 42, color: '#38bdf8' }}>${total.toLocaleString()}</h2>
        <p style={{ margin: '8px 0 0', color: '#22c55e', fontSize: 14 }}>↗ +2.8% aujourd hui</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {mockWallets.map(w => (
          <div key={w.name} style={{ background: '#1e293b', borderRadius: 12, padding: 20, border: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>{w.icon}</span>
                <span style={{ fontWeight: 600 }}>{w.name}</span>
              </div>
              <span style={{ color: w.change > 0 ? '#22c55e' : '#ef4444', fontSize: 13 }}>
                {w.change > 0 ? '↗' : '↘'} {Math.abs(w.change)}%
              </span>
            </div>
            <p style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: '#f1f5f9' }}>${w.value.toLocaleString()}</p>
            <p style={{ margin: 0, fontSize: 12, color: '#64748b' }}>{w.assets.join(' · ')}</p>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', color: '#334155', marginTop: 32, fontSize: 12 }}>
        Donnees simulees — connecte tes API keys dans .env pour donnees reelles
      </p>
    </div>
  )
}