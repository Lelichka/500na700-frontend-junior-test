import {RouterProvider} from "react-router";
import {router} from "./react/router.tsx";

const App= () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;