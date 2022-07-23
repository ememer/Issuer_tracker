import { useState } from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import Headline from "../components/Headline";
import Issue from "../components/Issue";
import Layout from "../components/Layout";

import "../sass/components/issues.scss";

const URGENT_STATUSES = ["Wybierz", "Normalny", "Średni", "Wysoki"];
const tempResp = ["Wybierz", "Leorem1", "Leorem2", "Leorem3"];

const TASKS_STATUS = ["Wybierz", "Otwarty", "Zamknięty"];

const EMPTY_FORM = {
  responsible: tempResp[0],
  urgent: URGENT_STATUSES[0],
  description: "",
  status: TASKS_STATUS[0],
};

const Issues = () => {
  const [formState, setFormState] = useState(EMPTY_FORM);
  const [issuesArray, setIssuesArray] = useState([]);

  function IssueTemplate(number, responsible, issue, urgent, status) {
    this.number = number;
    this.responsible = responsible;
    this.issue = issue;
    this.urgent = urgent;
    this.status = status;
  }

  const { responsible, urgent, description, status } = formState;

  const validateForm = (person, priority, description, status) => {
    if (
      person === "Wybierz" ||
      priority === "Wybierz" ||
      status === "Wybierz"
    ) {
      return { error: "Pola z gwiazdką są wymagane" };
    }

    if (description?.length < 5) {
      return {
        description: "Opis problemu powinien zawierać minimum 5 znaków",
      };
    }
    return {};
  };

  const validateResult = validateForm(responsible, urgent, description, status);

  const isValid = Object.keys(validateResult).length === 0;

  const createNewIssue = (e) => {
    e.preventDefault();
    setIssuesArray((prevState) => [
      ...prevState,
      new IssueTemplate(
        prevState.length + 1,
        responsible,
        description,
        urgent,
        status
      ),
    ]);
    setFormState(EMPTY_FORM);
  };

  const removeIssueFromList = (e) => {
    let newIssueArray = issuesArray.filter(
      (item) => item.number !== +e.target.id
    );

    const updateNumber = newIssueArray.map((item, index) => ({
      ...item,
      number: index + 1,
    }));

    setIssuesArray(updateNumber);
  };

  return (
    <Layout>
      <div className="issue-form">
        <form onSubmit={(e) => createNewIssue(e)} className="col-12 col-md-6">
          <label>
            Odpowiedzialny <span>*</span>
            <select
              value={formState.responsible}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  responsible: e.target.value,
                }))
              }
            >
              {tempResp.map((resp) => (
                <option key={resp} value={resp}>
                  {resp}
                </option>
              ))}
            </select>
          </label>
          <label>
            Opis problemu <span>*</span>
            <textarea
              rows="5"
              value={formState.description}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
            {validateResult?.description && (
              <div className="col-12  warn-msg">
                {validateResult.description}
              </div>
            )}
          </label>
          <label>
            Ważność <span>*</span>
            <select
              value={urgent}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  urgent: e.target.value,
                }))
              }
            >
              {URGENT_STATUSES.map((urgent) => (
                <option key={urgent} value={urgent}>
                  {urgent}
                </option>
              ))}
            </select>
          </label>
          <label>
            Status <span>*</span>
            <select
              value={status}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  status: e.target.value,
                }))
              }
            >
              {TASKS_STATUS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <button
            className={clsx(!isValid && "disable", isValid && "active")}
            disabled={!isValid}
          >
            Zapisz
          </button>
          {validateResult?.error && (
            <div className="col-12  info-msg">{validateResult.error}</div>
          )}
        </form>
      </div>
      <Headline
        level={1}
        title="Problemy"
        headlineBG={true}
        className="col-12 issues-headline"
      />
      <div style={{ padding: "0 10px" }}>
        <div className="issues-main">
          <table className="row">
            <thead className="col-12">
              <tr className="row">
                <th className="col-2 col-md-1 col-lg-1">Lp.</th>
                <th className="col-4  col-md-3 col-lg-2">Odpowiedzialny</th>
                <th className="col-4 col-md-3 col-lg-3 ">Problem</th>
                <th className="col-1  mobile-hidden">Ważność</th>
                <th className="col-2 ">Status</th>
                <th className="col-2 col-lg-1 mobile-hidden">
                  <FontAwesomeIcon icon={faTrash} />
                </th>
              </tr>
            </thead>
            {issuesArray.map((issue) => (
              <Issue
                key={issue.number}
                numberID={issue.number}
                responsible={issue.responsible}
                issue={issue.issue}
                urgent={issue.urgent}
                status={issue.status}
                remove={removeIssueFromList}
              />
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Issues;
