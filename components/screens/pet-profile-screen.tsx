'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Flame, Droplets, Award } from 'lucide-react'
import PetCharacter from '@/components/pet-character'

interface PetProfileScreenProps {
  onNavigate: (screen: string) => void
}

export default function PetProfileScreen({ onNavigate }: PetProfileScreenProps) {
  const accessories = [
    { id: 1, name: 'Golden Crown', emoji: '👑', unlocked: true },
    { id: 2, name: 'Dragon Wings', emoji: '🐉', unlocked: true },
    { id: 3, name: 'Magic Shield', emoji: '🛡️', unlocked: true },
    { id: 4, name: 'Healing Aura', emoji: '✨', unlocked: false },
    { id: 5, name: 'Victory Cape', emoji: '🧥', unlocked: false },
    { id: 6, name: 'Legend Mark', emoji: '⭐', unlocked: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-3xl font-bold text-primary">Nour's Profile</h1>
        <div className="w-10" />
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
        {/* Pet Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <PetCharacter size="xlarge" />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-3 shadow-lg">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Pet Info */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Nour</h2>
          <p className="text-lg text-primary font-semibold mb-1">Dragon Guardian</p>
          <p className="text-sm text-muted-foreground">Level 8 • Expert Healer</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Energy */}
          <div className="bg-yellow-50 rounded-2xl p-4 text-center">
            <Flame className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground mb-1">120</p>
            <p className="text-xs text-muted-foreground">Energy</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-yellow-500 h-full w-full rounded-full"></div>
            </div>
          </div>

          {/* Health */}
          <div className="bg-red-50 rounded-2xl p-4 text-center">
            <Droplets className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground mb-1">95%</p>
            <p className="text-xs text-muted-foreground">Health</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-red-500 h-full w-4/5 rounded-full"></div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            <Award className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground mb-1">8240</p>
            <p className="text-xs text-muted-foreground">Experience</p>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-blue-500 h-full w-3/5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-base">
            🍎 Feed Nour
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 text-base">
            💤 Rest Together
          </Button>
        </div>

        {/* Accessories Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Accessories</h3>
          <div className="grid grid-cols-3 gap-3">
            {accessories.map((accessory) => (
              <div
                key={accessory.id}
                className={`rounded-2xl p-4 text-center transition-all ${
                  accessory.unlocked
                    ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50'
                    : 'bg-gray-100 opacity-40 border-2 border-gray-300'
                }`}
              >
                <div className="text-4xl mb-2">{accessory.emoji}</div>
                <p className="text-xs font-semibold text-foreground">
                  {accessory.name}
                </p>
                {!accessory.unlocked && (
                  <p className="text-xs text-muted-foreground mt-1">Locked</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <Button
        onClick={() => onNavigate('home')}
        className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-2xl"
      >
        Return Home
      </Button>
    </div>
  )
}
