import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history, children }) {
    useEffect(() => {
        // listen() return a function used to remove the listener :
        const unlisten = history.listen(() => {
            if (window.scrollY > 100) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });

        return () => {
            unlisten();
        };
    }, [history]);

    return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
