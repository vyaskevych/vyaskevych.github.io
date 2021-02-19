const elem = <h1>Привіт світ</h1>

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    addOne() {
        this.setState({ count: this.state.count + 1 })
    }

    addNumber(numb) {
        this.setState({ count: this.state.count + numb })
    }

    render = () => (
        <div>
            {elem}
            <h2>Лічільник: {this.state.count}</h2>
            <button onClick={() => this.addOne()}>Додати 1</button>
            <button onClick={() => this.addNumber(10)}>Додати 10</button>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));