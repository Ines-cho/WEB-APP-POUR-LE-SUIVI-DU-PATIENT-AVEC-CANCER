import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ShowcasePage() {
  const screens = [
    {
      title: 'Home Screen',
      description: 'Welcome screen with pet character, progress tracking, and quick navigation to all features',
      image: '/screen-1-home.jpg',
      emoji: '🏠',
    },
    {
      title: 'Quest Map',
      description: 'Visual journey showing completed sessions as islands, with clear progression to milestones',
      image: '/screen-2-quest-map.jpg',
      emoji: '📍',
    },
    {
      title: 'Pet Profile',
      description: 'Character page showing pet evolution, stats, and unlocked accessories as rewards',
      image: '/screen-3-pet-profile.jpg',
      emoji: '🐉',
    },
    {
      title: 'Daily Missions',
      description: 'Non-mandatory health suggestions (hydration, nutrition, movement, family time)',
      image: '/screen-4-missions.jpg',
      emoji: '⭐',
    },
    {
      title: 'Family Wall',
      description: 'Messages of support from family members creating emotional connection and motivation',
      image: '/screen-5-family-wall.jpg',
      emoji: '💝',
    },
    {
      title: 'Celebration Screen',
      description: 'Joyful celebratory experience after completing a session with achievements and progress',
      image: '/screen-6-celebration.jpg',
      emoji: '🌟',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white py-8 px-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">🐉 Hero's Journey</h1>
            <p className="text-xl opacity-90">
              Gamified Health App for Children in Chemotherapy
            </p>
          </div>
          <Link href="/">
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold">
              Try App ✨
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Challenge</h3>
              <p className="text-base text-foreground mb-4 leading-relaxed">
                Children undergoing long-term chemotherapy (6+ months) experience a 40% drop in
                treatment adherence after 2-3 months due to fatigue, fear, and loss of motivation.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                <strong>Our Solution:</strong> Transform the treatment journey into an empowering
                hero's quest where children become the protagonist, supported by their pet
                companion and family.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🐉</span>
                  <span className="text-base">Virtual Pet Companion that evolves with healing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-base">Quest Map with visual progression milestones</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-base">Daily Missions (optional, non-punitive)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💝</span>
                  <span className="text-base">Family Support Wall with real messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-base">Achievement Badges and accessories</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <span className="text-base">Celebration animations after sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screens Showcase */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          All 6 Screens
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src={screen.image || "/placeholder.svg"}
                  alt={screen.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {screen.emoji} {screen.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Principles */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Design & Ethical Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">✅ What We Include</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✨ Positive celebrations for every effort</li>
                <li>💬 Encouraging language ("You are courageous")</li>
                <li>🎨 Colorful, soothing design (no aggressive reds)</li>
                <li>😴 Rest mode when child is fatigued</li>
                <li>💝 Transparent family involvement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4">❌ What We Avoid</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>🚫 No punishment for missing missions</li>
                <li>🚫 No stressful countdowns or deadlines</li>
                <li>🚫 No competition with other children</li>
                <li>🚫 No aggressive notifications</li>
                <li>🚫 No guilt-based mechanics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Target User: Yasmine (9 years old)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Situation</h3>
              <p className="text-sm text-foreground">
                Diagnosed with acute leukemia. 6 months of chemotherapy (36 sessions) ahead.
                Experiencing fear, nausea, fatigue, and social isolation.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Main Challenges</h3>
              <ul className="text-sm text-foreground space-y-2">
                <li>• Fear of injections and side effects</li>
                <li>• Loss of motivation after 2-3 months</li>
                <li>• Feeling powerless in treatment</li>
                <li>• Social isolation from peers</li>
              </ul>
            </div>
            <div className="bg-pink-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Our Solution</h3>
              <p className="text-sm text-foreground">
                Transform her role from "patient" to "hero." Give her control through a pet
                she nurtures, quests she completes, and family support she sees daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Mechanics */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Gamification Loop: Action → Feedback → Motivation → Repeat
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-foreground mb-2">Action</h3>
              <p className="text-sm text-muted-foreground">
                Child completes chemotherapy session or takes medicine
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="font-bold text-foreground mb-2">Immediate Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Pet evolves, new island unlocks, badge earned, celebration screen
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">💪</div>
              <h3 className="font-bold text-foreground mb-2">Motivation</h3>
              <p className="text-sm text-muted-foreground">
                Feeling of progress, pride, connection with pet and family
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🔄</div>
              <h3 className="font-bold text-foreground mb-2">Repeat</h3>
              <p className="text-sm text-muted-foreground">
                Anticipation for next session, curiosity about pet evolution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Expected Impact</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">+64%</div>
              <p className="text-sm opacity-90">
                Increased adherence (based on virtual pet studies)
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">-40%</div>
              <p className="text-sm opacity-90">
                Reduction in anxiety during treatment
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-sm opacity-90">
                Ethical design - zero dark patterns
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">6 mo</div>
              <p className="text-sm opacity-90">
                Complete journey support for full treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="text-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-primary to-accent text-white font-bold py-6 px-8 text-lg rounded-2xl hover:shadow-lg">
              Try the Interactive App ✨
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Click to experience all 6 screens and see how Hero's Journey works
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>
            🐉 Hero's Journey - A Gamified Health App for Children in Long-term Cancer Treatment
          </p>
          <p className="mt-2">
            Created with ❤️ for PEXILIS Challenge 2026 | Open Minds Club Hackathon
          </p>
        </div>
      </footer>
    </div>
  )
}
