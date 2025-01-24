import './App.css'
import logo from './assets/cropped-logo.png'
import Congratulations from './Congratulations'
import cabels from './assets/cabels.png'

export default function App() {
    return(
        <>
            <header>
                <div className='container'>
                    <div className='img'>
                    <a href='https://ist.uisi.ru/' title='На кафедру ИСТ'><img src={logo}></img></a>
                    </div>
                    <div className='congra'>Поздравляем, прогеры и связисты!</div>
                </div>
            </header>
            <img src={cabels} className="girlanda"></img>
            <main className='first' id='first'>
                <div className='backg'></div>
                <div className='container'>
                    <div className='mainText'>
                        <h1>Мы спросили у настоящих машин как они празднуют новый год. И вот результат! Очень похоже на нас, не так ли?</h1>
                    </div>
                    <Congratulations/>
                </div>
            </main>
            <img src={cabels} className="girlanda" style={{marginTop: -65}}></img>
        </>
    )
}
