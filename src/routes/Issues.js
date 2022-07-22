import { useState } from "react";

import Headline from "../components/Headline";
import Issue from "../components/Issue";
import Layout from "../components/Layout";

import "../sass/components/issues.scss";

const tempResp = ["Wybierz", "Leorem1", "Leorem2", "Leorem3"];

const URGENT_STATUSES = ["Wybierz", "Normalny", "Średni", "Wysoki"];
const TASKS_STATUS = ["Wybierz", "Otwarty", "Zamknięty"];

const Issues = () => {
  const [issuesArray, setIssuesArray] = useState([]);
  const [urgentStatus, setUrgentStatus] = useState(
    URGENT_STATUSES[0] ?? "Wybierz"
  );
  const [taskStatus, setTaskStatus] = useState(TASKS_STATUS[0] ?? "Wybierz");
  const [responsible, setResponsible] = useState(tempResp[0] ?? "Wybierz");
  const [issueDescription, setIssueDescription] = useState("");

  function IssueTemplate(number, responsible, issue, urgent, status) {
    this.number = number;
    this.responsible = responsible;
    this.issue = issue;
    this.urgent = urgent;
    this.status = status;
  }

  const createNewIssue = (e) => {
    e.preventDefault();

    setIssuesArray((prevState) => [
      ...prevState,
      new IssueTemplate(
        prevState.length + 1,
        responsible,
        issueDescription,
        urgentStatus,
        taskStatus
      ),
    ]);
  };

  return (
    <Layout>
      <div>
        <form>
          <select
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
          >
            {tempResp.map((resp) => (
              <option key={resp} value={resp}>
                {resp}
              </option>
            ))}
          </select>
          <textarea
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
          />
          <select
            value={urgentStatus}
            onChange={(e) => setUrgentStatus(e.target.value)}
          >
            {URGENT_STATUSES.map((urgent) => (
              <option key={urgent} value={urgent}>
                {urgent}
              </option>
            ))}
          </select>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            {TASKS_STATUS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button onClick={(e) => createNewIssue(e)}>Zapisz</button>
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
                <th className="col-4 col-md-3 col-lg-3">Problem</th>
                <th className="col-1  mobile-hidden">Ważność</th>
                <th className="col-1 mobile-hidden">Status</th>
                <th className="col-2 col-lg-1 mobile-hidden">Zaznacz</th>
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
              />
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Issues;
