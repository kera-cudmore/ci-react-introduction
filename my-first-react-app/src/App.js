import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
    return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Kera" age="37" />
        <StatefulGreeting greeting="I'm a stateful class component" name="Kera" />
    </div>
    );
}

export default App;
