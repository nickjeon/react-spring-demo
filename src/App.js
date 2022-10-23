import Card from './components/Card';
import Hero from './components/Hero';
import Info from './components/Info';
import Image from './components/Image';
import Particle from './components/Particle';
import { cards } from './utils/cards';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Particle />
      <Hero>
          <div className='container'>
            <Info />
            <div className='row'>
              {cards.map((card, i) => (
                <div className='column' key={i}>
                  <Card>
                    <div className='card-title'>{card.title}</div>
                    <div className='card-body'>{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
    </div>
  );
}

export default App;
