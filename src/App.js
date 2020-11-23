import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
  }
}

export default App;
