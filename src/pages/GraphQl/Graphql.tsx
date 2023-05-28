import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setQuery, setVariables, setRepsonse, setHeaders, switchVariablesSection, switchHeadersSection } from "../../store/graphiql";
import { useEffect } from "react";
import styles from './Graphql.module.scss';
import { getLocalizedText } from "../../services/localization-service";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function GraphQl() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.graphiqlReducer.query);
  const variables = useAppSelector((state) => state.graphiqlReducer.variables);
  const response = useAppSelector((state) => state.graphiqlReducer.response);
  const headers = useAppSelector((state) => state.graphiqlReducer.headers);
  const isVariablesSectionHidden = useAppSelector((state) => state.graphiqlReducer.isVariablesSectionHidden);
  const isHeadersSectionHidden = useAppSelector((state) => state.graphiqlReducer.isHeadersSectionHidden);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/welcome");
  }, [user, loading]);


  return (
    <div className={styles.graphql}>
      <div className={styles.graphql_header}>GraphiQL</div>

      <div className={styles.graphql_content}>
        {/* <div className={styles.graphql_docs}>
          <img className={styles.graphql_docs_icon} src='/src/assets/docs.svg' />
        </div> */}

        <div className={styles.graphql_editor_response}>

          <div className={styles.graphql_input}>
            <div className={styles.editor}>
              <textarea className={styles.editor_text} onInput={(e) => dispatch(setQuery(((e.target as HTMLInputElement).value)))} />
              <button className={styles.editor_button} onClick={() => sendGraphQlRequest(query)}>►</button>
            </div>

            <div className={styles.graphql_vars_headers}>
              <div className={styles.graphql_changeable}>
                <span
                className={styles.vars_headers}
                  onClick={() => {
                    dispatch(switchVariablesSection(false));
                    dispatch(switchHeadersSection(true));
                  }}
                >{getLocalizedText('variables')}</span>
                <textarea
                  hidden={isVariablesSectionHidden}
                  onInput={(e) => dispatch(setVariables(((e.target as HTMLInputElement).value)))}
                  className={styles.graphql_vars_headers_input}
                />
              </div>
              <div className={styles.graphql_changeable}>
                <span
                  className={styles.vars_headers}
                  onClick={() => {
                    dispatch(switchHeadersSection(false));
                    dispatch(switchVariablesSection(true));
                  }}
                >{getLocalizedText('headers')}</span>
                <textarea 
                  hidden={isHeadersSectionHidden}
                  onInput={(e) => dispatch(setHeaders(((e.target as HTMLInputElement).value)))} 
                  className={styles.graphql_vars_headers_input}
                />
              </div>
              <div 
                className={styles.graphql_vars_headers_close}
                onClick={() => {
                  dispatch(switchVariablesSection(true));
                  dispatch(switchHeadersSection(true));
                }}
                hidden={!(!isVariablesSectionHidden || !isHeadersSectionHidden)}
              >X</div>
            </div>
          </div>

          <div className={styles.graphql_response}>
            <div>Response</div>
            <pre>
              {response}
            </pre>
          </div>
        </div>

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
      });
  }
}

