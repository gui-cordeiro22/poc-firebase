// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";
import { onValue, ref } from "firebase/database";

// Pages
import { HomePage } from "../../components/pages/home-page";

// Services
import { dataBase } from "../../services/firebase/config";

export const Home: FunctionComponent = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const query = ref(dataBase, "teste-cordeiro");

    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const response = snapshot.val();
        const values = Object.values(response);
        setData(values);
      }
    });
  }, []);

  console.log("Data: ", data);

  return (
    <Fragment>
      <HomePage
        siginFormSection={(data ?? []).map((item, index) => (
          <ul>
            <li key={`user-${index}`} style={{ color: "#fff" }}>
              {item.nome}
            </li>
          </ul>
        ))}
      />
    </Fragment>
  );
};
