import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';


function App() {
    return (
    <div className="App">
        
        {/* LESSONS 1 to 10 */}
        {/* <FunctionalGreeting /> */}
        {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Kera" age="37" /> */}
        {/* <StatefulGreeting greeting="I'm a stateful class component" name="Kera" /> */}
        {/* <StatefulGreetingWithCallback /> */}
        {/* <StatefulGreetingWithPrevState /> */}

        <EventsFunctional />
        <EventsClass />

    </div>
    );
}

export default App;
