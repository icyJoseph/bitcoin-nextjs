// just to show that you can use React.Component directly!
class Prices extends React.Component {
  render() {
    const { bpi } = this.props;
    const currencies = Object.keys(bpi);
    return (
      <div>
        <ul className="list-group">
          {currencies.map(currency => (
            <li className="list-group-item">
              Bitcoin rate for {bpi[currency].description}:{" "}
              <span class="badge bagde-primary">{bpi[currency].code}</span>
              <strong>{bpi[currency].rate}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Prices;
