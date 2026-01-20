import { Switch, Route } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import Roster from "@/pages/Roster";
import Team from "@/pages/Team";
import Staff from "@/pages/Staff";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/team" component={Team} />
      <Route path="/staff" component={Staff} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
