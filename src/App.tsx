import { EventDetails } from './components/EventDetails'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LocationSection } from './components/LocationSection'
import { RSVPSection } from './components/RSVPSection'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <EventDetails />
        <LocationSection />
        <RSVPSection />
      </main>
      <Footer />
    </>
  )
}
