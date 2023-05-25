import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setQuery, setRepsonse } from "../../store/graphiql";


export default function GraphQl() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.graphiqlReducer.query);
  const response = useAppSelector((state) => state.graphiqlReducer.response);

  return (
    <div>
      <span>GrapQl</span>
      <div>
        <textarea onInput={(e) => dispatch(setQuery(((e.target as HTMLInputElement).value)))} />
        <button onClick={() => sendGraphQlRequest(query)}>Send</button>
      </div>
      <div>
        <div>Response</div>
        <pre>
          {response}
        </pre>
      </div>
    </div>
  )

  function sendGraphQlRequest(queryContent: string) {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query: queryContent}),
    })
      .then((res) => res.json())
      // .then((data) => dispatch(setRepsonse(data)));
      .then((data) => {
        dispatch(setRepsonse(JSON.stringify(data, null, 2)))
        console.log(response);
      });
  }
}

