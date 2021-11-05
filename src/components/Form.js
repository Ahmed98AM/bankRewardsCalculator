import React, { useState, useEffect } from "react";

const Form = function (props) {
  const [enteredBills, setEnteredBills] = useState("");
  const [enteredAdSpend, setEnteredAdSpend] = useState("");
  const [enteredCorpSpend, setEnteredCorpSpend] = useState("");
  const [enteredTeamProject, setEnteredTeamProject] = useState("");

  const billsChangedHandler = function (e) {
    setEnteredBills(e.target.value);
  };
  const adSpendChangedHandler = function (e) {
    setEnteredAdSpend(e.target.value);
  };
  const corpSpendChangedHandler = function (e) {
    setEnteredCorpSpend(e.target.value);
  };
  const teamProjectChangedHandler = function (e) {
    setEnteredTeamProject(e.target.value);
  };
  const corpNameHandler = function (e) {
    props.onFormButtonCorpNameChanged(e.target.value);
  };

  const onFormHandler = function () {
    if (
      enteredBills &&
      enteredAdSpend &&
      enteredCorpSpend &&
      enteredTeamProject
    ) {
      const formData = {
        bills: enteredBills,
        adSpend: enteredAdSpend,
        corpSpend: enteredCorpSpend,
        teamProject: enteredTeamProject,
      };
      props.onFormSubmit(formData);
    }
  };
  const formElement = React.createRef();
  useEffect(() => {
    onFormHandler();
  }, [enteredBills]);
  useEffect(() => {
    onFormHandler();
  }, [enteredAdSpend]);
  useEffect(() => {
    onFormHandler();
  }, [enteredCorpSpend]);
  useEffect(() => {
    onFormHandler();
  }, [enteredTeamProject]);

  return (
    <form ref={formElement}>
      <div className="user-box">
        <input
          value={enteredBills}
          onChange={billsChangedHandler}
          type="number"
          required
        />
        <label>Vendor/Bills </label>
      </div>
      <div className="user-box">
        <input
          value={enteredAdSpend}
          onChange={adSpendChangedHandler}
          type="number"
          required
        />
        <label>Media/Ad Spend </label>
      </div>
      <div className="user-box">
        <input
          value={enteredCorpSpend}
          onChange={corpSpendChangedHandler}
          type="number"
          required
        />
        <label>Corp.Spend </label>
      </div>
      <div className="user-box">
        <input
          value={enteredTeamProject}
          onChange={teamProjectChangedHandler}
          type="number"
          required
        />
        <label>Team Project </label>
      </div>
      <div className="formButtons">
        <button value="Brex" onClick={corpNameHandler} type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Brex
        </button>
        <button value="Stripe" onClick={corpNameHandler} type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Stripe
        </button>
        <button value="Amex" onClick={corpNameHandler} type="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Amex
        </button>
      </div>
    </form>
  );
};

export default Form;
