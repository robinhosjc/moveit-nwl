const Error = ({ statusCode }: ({ statusCode?: number })) => (
    <div>
        <p>
            {
                statusCode
                ? `Error ${statusCode}`
                : `Error`
            }
        </p>
    </div>
);

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 400;
    return { statusCode };
};


export default Error;