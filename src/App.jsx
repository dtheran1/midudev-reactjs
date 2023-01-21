import './App.css'
import { TwitterFollowCar } from './TwitterFollowCard'

const users = [
  {
    userName: 'dtheran1',
    name: 'Daniel Theran',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'eberlinc',
    name: 'Eberlin Caro',
    isFollowing: true
  },
  {
    userName: 'PacoHdezz',
    name: 'Paco H',
    isFollowing: false
  },
]

export function App() {
  return (
    <section className="App">
      {
        users.map((user) => {
          const { userName, isFollowing, name } = user

          return (
            <TwitterFollowCar
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
              key={userName}
            />
          )
        })
      }
    </section>
  )
}