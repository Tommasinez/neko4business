import * as Component from "./components";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Component.Navbar />
      </div>
        <Component.Hero />
        <Component.WhiteFade />
        <Component.Product />
        <Component.BlackFade />
        <Component.Features />
        <Component.WhiteFade />
        <Component.Cards />
        <Component.BlackFade />
        <Component.Footer />
      </div>
  )
}

export default App
