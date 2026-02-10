'use client'

import { useState } from 'react'
import HomeScreen from '@/components/screens/home-screen'
import QuestMapScreen from '@/components/screens/quest-map-screen'
import PetProfileScreen from '@/components/screens/pet-profile-screen'
import DailyMissionsScreen from '@/components/screens/daily-missions-screen'
import FamilyWallScreen from '@/components/screens/family-wall-screen'
import CelebrationScreen from '@/components/screens/celebration-screen'

type ScreenType = 'home' | 'quest' | 'pet' | 'missions' | 'family' | 'celebration'

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home')
  const [showCelebration, setShowCelebration] = useState(false)

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />
      case 'quest':
        return <QuestMapScreen onNavigate={setCurrentScreen} />
      case 'pet':
        return <PetProfileScreen onNavigate={setCurrentScreen} />
      case 'missions':
        return <DailyMissionsScreen onNavigate={setCurrentScreen} />
      case 'family':
        return <FamilyWallScreen onNavigate={setCurrentScreen} />
      case 'celebration':
        return <CelebrationScreen onClose={() => setCurrentScreen('home')} />
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-cyan-50">
      {renderScreen()}
      {showCelebration && (
        <CelebrationScreen onClose={() => setShowCelebration(false)} />
      )}
    </main>
  )
}
