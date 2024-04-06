import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            Oh no! :(
            <pre>
                {JSON.stringify(error, null, 2)}
            </pre>
        </div>
    )
}