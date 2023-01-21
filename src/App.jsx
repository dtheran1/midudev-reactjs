import './App.css'
import { TwitterFollowCar } from './TwitterFollowCard'
export function App() {
  return (
    <section className="App">
      <TwitterFollowCar
        userName="dtheran1"
        name="Daniel Theran teran"
        isFollowing={false}
      />
      <TwitterFollowCar
        userName="midudev"
        name="Miguel Angel Duran"
        isFollowing
      />
    </section>
  )
}