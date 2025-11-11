import HeroHome from "./components/HeroHome"
import CardTemplate from "./components/CardTemplate"
import CallToActionHome from "./components/CallToActionHome"
import AskQuestions from "./components/AskQuestions"
import AboutHome from "./components/AboutHome"

export default function index() {
  return (
    <main>
      <HeroHome />
      <CardTemplate />
      <CallToActionHome />
      <AskQuestions />
      <AboutHome />
    </main>
  )
}
