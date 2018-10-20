// just to show that you can use React.Component directly!
class Prices extends React.Component {
  state = {
    favorite: "EUR"
  };

  changeFavorite = e => this.setState({ favorite: e.target.value });

  render() {
    const { bpi } = this.props;
    const { favorite } = this.state;
    const currencies = Object.keys(bpi);
    const sortedCurrencies = currencies.includes(favorite)
      ? [favorite].concat(currencies.filter(curr => curr !== favorite))
      : currencies;
    return (
      <div>
        <ul className="list-group">
          {sortedCurrencies.map(currency => (
            <li className="list-group-item" key={currency}>
              Bitcoin rate for {bpi[currency].description}:{" "}
              <span
                className={`badge badge-${
                  currency === favorite ? "danger" : "primary"
                }`}
              >
                {bpi[currency].code}
              </span>{" "}
              <strong>{bpi[currency].rate}</strong>
            </li>
          ))}
        </ul>
        <br />
        <select
          value={favorite}
          className="form-control"
          onChange={this.changeFavorite}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Prices;
