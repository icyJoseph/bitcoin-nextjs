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
    const notFavorites = currencies.filter(curr => curr !== favorite);
    // check if the favorite is in the currencies, if so, put it first and then the notFavorites
    const sortedCurrencies = currencies.includes(favorite)
      ? [favorite].concat(notFavorites)
      : currencies;

    return (
      <div>
        <ul className="list-group">
          {sortedCurrencies.map(currency => {
            const {
              [currency]: { description, code, rate }
            } = bpi;
            return (
              <li className="list-group-item" key={currency}>
                Bitcoin rate for {description}:{" "}
                <span
                  className={`badge badge-${
                    currency === favorite ? "danger" : "primary"
                  }`}
                >
                  {code}
                </span>{" "}
                <strong>{rate}</strong>
              </li>
            );
          })}
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
