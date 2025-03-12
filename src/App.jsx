


import './App.css'
import About from './components/About'
import Boxer from './components/Coba'
import Experience from './components/Content'


import Datadiri from './components/Datadiri'
import Header from './components/Header'
import Parallax from './components/Home'




// import Tentang from './components/Tentang'







const App = () => {





  return (
    <>
      <div className='overflow-hidden transition-all duration-200 scroll-smooth min-h-full '>

        <Header />
        <Parallax />
        <Datadiri />
        <About />
        <Boxer />
        <Experience />
      </div>
    </>
  )
}

export default App
