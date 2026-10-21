import Docs from "./Docs";
import Social from "./Social";

//export default function NextSteps (props){
// const count = props.count
//}

export default function NextSteps({ count, setCount }) {
  //   const [count, setCount] = useState(0);

  return (
    <div>
      <section id="next-steps">
        {/* <p>Count ist {count}</p> */}
        <Docs count={count} />
        <Social setCount={setCount} count={count} />
      </section>
    </div>
  );
}
