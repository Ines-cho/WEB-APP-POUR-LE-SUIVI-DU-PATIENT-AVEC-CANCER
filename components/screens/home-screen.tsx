'use client'

import { Heart, Zap, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PetCharacter from '@/components/pet-character'

interface HomeScreenProps {
  onNavigate: (screen: string) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Hero's Journey
        </h1>
        <p className="text-lg text-muted-foreground">
          Your adventure to courage and healing
        </p>
      </div>

      {/* Pet Character */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <PetCharacter size="large" />
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-foreground">Progress</span>
            <span className="text-sm font-bold text-primary">8/36</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-full w-1/4 rounded-full"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            🏰 Bronze Castle 5/36 sessions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <p className="text-xs font-semibold text-foreground">120</p>
            <p className="text-xs text-muted-foreground">Energy</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <Heart className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <p className="text-xs font-semibold text-foreground">95%</p>
            <p className="text-xs text-muted-foreground">Health</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <Award className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-xs font-semibold text-foreground">3</p>
            <p className="text-xs text-muted-foreground">Badges</p>
          </div>
        </div>

        {/* Main CTA */}
        <Button
          onClick={() => onNavigate('celebration')}
          className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold py-6 text-lg mb-3 rounded-2xl"
        >
          ✨ Complete Session Today
        </Button>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => onNavigate('quest')}
            className="text-base border-2 border-primary/20 hover:bg-primary/5"
          >
            📍 Quest Map
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate('pet')}
            className="text-base border-2 border-accent/20 hover:bg-accent/5"
          >
            🐉 Pet Profile
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate('missions')}
            className="text-base border-2 border-secondary/50 hover:bg-secondary/5"
          >
            ⭐ Daily Missions
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate('family')}
            className="text-base border-2 border-pink-200 hover:bg-pink-50"
          >
            💝 Family Wall
          </Button>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="text-center max-w-md">
        <p className="text-lg font-semibold text-primary italic">
          "You're not fighting alone. Your courage grows with every step."
        </p>
      </div>
    </div>
  )
}
