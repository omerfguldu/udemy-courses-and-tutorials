import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import CustomHookUseFetch from "./components/CustomHookUseFetch";
import CustomHookUseLocalStorage from "./components/CustomHookUseLocalStorage";

function App() {
  return (
    <div className="container mt-5">
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      {/* <UseMemo /> */}
      <UseCallback />
      {/* <CustomHookUseFetch /> */}
      <CustomHookUseLocalStorage />
    </div>
  );
}

export default App;
