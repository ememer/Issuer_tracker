import { useState } from "react";

import "../sass/components/issues.scss";

type Props = {
  numberID: number;
  responsible: string;
  issue: string;
  urgent: string;
  status: string;
  remove: (e: any) => void;
  edit: (e: any) => void;
  onSave: () => void;
};

const Issue = ({
  numberID,
  responsible,
  issue,
  urgent,
  status,
  remove,
  edit,
  onSave,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <tbody>
        <tr className="row">
          <td className="col-2 col-md-1 col-lg-1">
            <div>{numberID}</div>
          </td>
          <td className="col-4  col-md-3 col-lg-2">
            <div>{responsible}</div>
          </td>
          <td className="col-4 col-md-3 col-lg-3">
            <p>{issue}</p>
          </td>
          <td className="col-1  mobile-hidden">
            <div>{urgent}</div>
          </td>
          <td className="col-2">
            <div>{status}</div>
          </td>
          <td className="col-2 col-lg-1 mobile-hidden">
            <button id={`${numberID}`} onClick={(e) => remove(e)}>
              Usuń
            </button>
          </td>
          <td className="col-2 col-lg-1 mobile-hidden">
            <button
              id={`${numberID}`}
              onClick={(e) => {
                setIsOpen(!isOpen);
                edit(e);
              }}
            >
              Edytuj
            </button>
          </td>
        </tr>
      </tbody>
      {isOpen && (
        <div>
          <button onClick={() => onSave()}>Zapisz</button>
        </div>
      )}
    </>
  );
};

export default Issue;
