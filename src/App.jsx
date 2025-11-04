import Hero from "./components/Hero";
import IntegrationHighlight from "./components/IntegrationHighlight";
import ModuleSection from "./components/ModuleSection";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <IntegrationHighlight />
      <ModuleSection />
      <CTA />
    </div>
  );
}

export default App;
