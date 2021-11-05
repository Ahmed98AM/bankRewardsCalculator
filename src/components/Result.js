const Result = function (props) {
  const sum =
    props.formData.bills * 1 +
    props.formData.adSpend * 1 +
    props.formData.corpSpend * 1 +
    props.formData.teamProject * 1;
  const unlimitedRewards = sum * 1.1;
  const liftimeRewards = sum * 1.2;
  const brexSum = sum * 0.3;
  const stripeSum = sum * 2.9;
  const amexSum = sum * 1.3;
  const corpName = props.formButtonCorpName;

  const corpResultItemHTML = function (corpSum, corpName) {
    return (
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="bank1.png" className="card-img" alt="bank card" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{corpName} Bussiness Card</h5>
            <p className="card-text">{corpSum}$</p>
          </div>
        </div>
      </div>
    );
  };
  if (!sum) {
    return (
      <div className="results-section" style={{ textAlign: "center" }}>
        <h5>Enter all the values above to calculate your rewards</h5>
      </div>
    );
  }

  return (
    <div className="results-section card mb-3 ">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="bank2.png" className="card-img" alt="bank card" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Unlimited rewards</h5>
            <p className="card-text">{unlimitedRewards}$</p>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="bank2.png" className="card-img" alt="bank card" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Liftime Rewards</h5>
            <p className="card-text">{liftimeRewards}$</p>
          </div>
        </div>
      </div>
      {corpName === "Amex" && corpResultItemHTML(amexSum, "Amex")}
      {corpName === "Stripe" && corpResultItemHTML(stripeSum, "Stripe")}
      {corpName === "Brex" && corpResultItemHTML(brexSum, "Brex")}
    </div>
  );
};

export default Result;
