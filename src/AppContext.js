import React from "react";

/* This is such a small app that I could have easily just prop drilled the data to the child components or even made
the useEffect axios calls in the child components themselves. But context is just such a flexible tool for state management and I
happened to implement it for an app I'm building at work today. I couldn't resist overbuilding this. However, it would come in
quite handy if this app were ever to grow in complexity */

const AppContext = React.createContext({
	articles: [],
	authors: [],
});

export const AppProvider = AppContext.Provider;
export default AppContext;
