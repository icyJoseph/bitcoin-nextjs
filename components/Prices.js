class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    const { bpi } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpi[currency].description}:{" "}
            <span class="badge bagde-primary">{bpi[currency].code}</span>
            <strong>{bpi[currency].rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;
