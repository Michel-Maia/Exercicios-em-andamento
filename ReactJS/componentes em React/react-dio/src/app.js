import Item from './components/Item';
import Card from './components/Card'

const App = () => {
    return(
        <>
        <h1>Hello world</h1>
        <ul> 
        <li>
            <a href="/" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item
            Item 1
            </a>

        </li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>

        </>
    )
}

export default App;