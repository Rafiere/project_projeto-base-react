import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {} from "../../shared/contexts/LoggedUser";
import { useLoggedUser } from "../../shared/hooks/UseLoggedUser";
import CheckboxName, { CheckboxNameProps } from "./components/CheckboxName";

export const Dashboard = () => {
  const navigate = useNavigate();

  const loggedUserContext = useLoggedUser();

  const [inputTable, setInputTable] = useState("");
  const [listNames, setListNames] = useState<string[]>([]);

  const [inputCheckboxName, setInputCheckboxName] = useState<string>("");
  const [listCheckboxName, setListCheckboxName] = useState<CheckboxNameProps[]>(
    []
  );

  const handleClick = () => {
    navigate("/login");
  };

  const handleEnter = useCallback<React.KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (e.key === "Enter") {
        if (inputTable.trim().length === 0) {
          return;
        }

        setListNames((oldListNames) => {
          return [...oldListNames, inputTable];
        });
      }
    },
    [inputTable]
  );

  const handleEnterCity = useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >(
    (e) => {
      /* applying fail fast concept. */
      if (e.key !== "Enter") {
        return;
      }

      setListCheckboxName((oldList) => {
        const newItem: CheckboxNameProps = {
          name: inputCheckboxName,
        };

        return [...oldList, newItem];
      });
    },
    [inputCheckboxName]
  );

  /* O valor será atualizado, o estado, não, pois estamos realizando uma modificação direta. */
  const counterRef = useRef(0);

  return (
    <div>
      <h1>Dashboard Page</h1>

      <h2>Logged User: {loggedUserContext.username}</h2>

      <h2>Name List</h2>

      <label>
        <span>Insert a Name and Press Enter</span>
        <input
          onKeyDown={handleEnter}
          value={inputTable}
          onChange={(e) => setInputTable(e.target.value)}
          placeholder={"Insert a name..."}
        />
      </label>

      {listNames.map((name, index) => {
        return (
          <li key={name}>
            {index + 1 + " - "} {name}
          </li>
        );
      })}

      <label>
        <span>Insert a City and Press Enter</span>
        <input
          onKeyDown={handleEnterCity}
          value={inputCheckboxName}
          onChange={(e) => setInputCheckboxName(e.target.value)}
          placeholder={"Insert a city..."}
        />
      </label>

      {listCheckboxName.map((checkbox) => {
        return (
          <CheckboxName name={checkbox.name} key={checkbox.name}></CheckboxName>
        );
      })}

      <p>Contador: {counterRef.current}</p>
      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef)}>Gerar Log</button>
      <button onClick={() => loggedUserContext.logout()}>Logout</button>

      <button onClick={handleClick}>Ir para Login</button>
    </div>
  );
};
