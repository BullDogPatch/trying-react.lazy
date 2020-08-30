import React, { Suspense } from "react";
import FallbackComponent from "./FallbackComponent";

const ComponentTwo = React.lazy(() => import("./ComponentTwo"));
const ComponentOne = React.lazy(() => import("./ComponentOne"));

function App() {
  return (
    <div>
      <Suspense fallback={<FallbackComponent />}>
        <section>
          <ComponentTwo />
          <ComponentOne />
        </section>
      </Suspense>
    </div>
  );
}

export default App;
