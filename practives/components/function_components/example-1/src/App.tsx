import { forwardRef, useRef } from "react";
import "./App.css";

//* Create Function Component
type WelcomeProps = {
  name?: string;
};

function Welcome({ name = "Tam" }: WelcomeProps) {
  return <>Hello, {name}</>;
}

type DetailProps = {
  detail: string;
};

const Detail = ({ detail }: DetailProps) => {
  return <>{detail}</>;
};

//* Passing Ref into DOM Element
const TextInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div>{inputRef.current?.value}</div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

//* Passing Ref into Custom Component
type InputProps = {
  placeholder?: string;
};

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return <input ref={ref} placeholder={placeholder} />;
  }
);

function App() {
  return (
    <>
      <section>
        <h2>Create Function Component</h2>
        <h3>
          <Welcome />
        </h3>
        <p>
          <Detail detail="This is a detail" />
        </p>
      </section>

      <hr></hr>

      <section>
        <h2>Passing Ref into DOM Element</h2>
        <TextInput />
      </section>

      <hr></hr>

      <section>
        <h2>Passing Ref into Custom Component</h2>
        <CustomInput placeholder="Team" />
      </section>
    </>
  );
}

export default App;
