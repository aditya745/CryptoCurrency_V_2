import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCrypto, sortByPrice, sortByRank } from '../store/actions/cryptoActions';
import './cryptoContainer.css';
class CryptoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { crypto: "" }
    }

    componentDidMount() {
        this.props.getCrypto();
    }

    updateSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSortByPrice = () => {
        this.props.sortByPrice();
    }

    handleSortByRank = () => {
        this.props.sortByRank();
    }

    render() {
        const cryptoValues = (Object.values(this.props.crypto));
        let allCryptos;
        if (this.state.crypto === "") {
            allCryptos = cryptoValues.map(cryptos => {
                return (
                    <div key={cryptos.id} >
                        <div className="crypto-container_cryptos">
                            <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${cryptos.id}.png`} alt="cryptoImg" className="icon" />
                            <h4>{cryptos.name} ({cryptos.symbol})</h4>
                            <h4>Price: {cryptos.quotes.USD.price.toFixed(2)}</h4>
                            <h4>Percent_Change_1h:</h4> <h5 style = {(cryptos.quotes.USD.percent_change_1h < 1) ? {color:"red"} : {color:"green"}}>{cryptos.quotes.USD.percent_change_1h}</h5>
                            <h4>Percent_Change_24h:</h4> <h5 style = {(cryptos.quotes.USD.percent_change_24h < 1) ? {color:"red"} : {color:"green"}}>{cryptos.quotes.USD.percent_change_24h}</h5>
                        </div>
                    </div>
                )
            })
        }
        else {
            console.log(this.props.crypto);
            const Values = (Object.values(this.props.crypto)).filter(item => item.name.toLowerCase().indexOf(this.state.crypto.toLowerCase()) !== -1)
            allCryptos = Values.map(cryptos => {
                return (
                    <div key={cryptos.id} >
                        <div className="crypto-container_cryptos">
                            <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${cryptos.id}.png`} alt="cryptoImg" className="icon" />
                            <h4>{cryptos.name} ({cryptos.symbol})</h4>
                            <h4>Price: {cryptos.quotes.USD.price.toFixed(2)}</h4>
                            <h4>Percent_Change_1h:</h4> <h5>{cryptos.quotes.USD.percent_change_1h}</h5>
                            <h4>Percent_Change_24h:</h4> <h5>{cryptos.quotes.USD.percent_change_24h}</h5>
                        </div>
                    </div>
                )
            })
        }


        return (
            <div>
                <div className = "crypto-header">
                    <div>    
                        <input name="crypto" type="text" value={this.state.crypto} onChange={this.updateSearch} />
                    </div>
                    <div>
                        <button className = "btn1" onClick = {this.handleSortByPrice}>Sort by Price</button>
                    </div>   
                    <div>
                        <button className = "btn2" onClick = {this.handleSortByRank}>Sort by Rank</button>
                    </div>                
                </div>
                <div className="crypto-container">
                    {allCryptos}
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    crypto: state.reducer.cryptos
})
export default connect(mapStateToProps, { getCrypto, sortByPrice, sortByRank })(CryptoContainer);
