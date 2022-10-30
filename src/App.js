import Router from './Routes/Router';
import { IssueProvider } from './lib/context/IssueContext';

function App() {
  return (
    <IssueProvider>
      <Router />
    </IssueProvider>
  );
}

export default App;
