import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setQuery, setVariables, setRepsonse, setHeaders } from "../../store/graphiql";


export default function GraphQl() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.graphiqlReducer.query);
  const variables = useAppSelector((state) => state.graphiqlReducer.variables);
  const response = useAppSelector((state) => state.graphiqlReducer.response);
  const headers = useAppSelector((state) => state.graphiqlReducer.headers);

  return (
    <div>
      <span>GrapQl</span>
      <div>
        <textarea onInput={(e) => dispatch(setQuery(((e.target as HTMLInputElement).value)))} />
        <button onClick={() => sendGraphQlRequest(query)}>Send</button>
      </div>
      <div>
        <span>Variables</span>
        <textarea onInput={(e) => dispatch(setVariables(((e.target as HTMLInputElement).value)))} />
      </div>
      <div>
        <span>Headers</span>
        <textarea onInput={(e) => dispatch(setHeaders(((e.target as HTMLInputElement).value)))} />
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
    const body: { query: string, variables?: string } = {
      query: queryContent,
    }
    if (variables) body['variables'] = JSON.parse(variables);


    const finalHeaders: {key: string} = headers ? JSON.parse(headers) : {};

    const newHeaders = new Headers({"Content-Type": "application/json"});
    for (const [key, value] of Object.entries(finalHeaders)) {
      newHeaders.append(key, value);
    }

    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: newHeaders,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setRepsonse(JSON.stringify(data, null, 2)))
        console.log(response);
      });
  }
}

