// ================================================================================================
//
// HOOKS
//
// ================================================================================================

// useState because react renders component only once
// useState saves a state value

// useState('singleValue');
// const [value, setValueFunction] useState(valueToWatch);
// returns value and update function from watched value

// useState({Object: multipleStateInputs});
// const [inputObject, setInputObject] = useState({
//     key1: '',
//     key2: '',
//     key3: ''
// })
// setValueObject((prevState) => {
//     return { ...prevState, singleKey: newValue }
// })
// base updated state on current state

// use key when dynamically rendering lists
// will rerender all children

// ================================================================================================

// useEffect to only run select code when dependencies are altered
// useEffect(() => {
//     updating example code;
// };
// return cleanupFunction; --------- (runs fisrt at every rerender (except page load)clearTimeout perhaps), cleanup will run if component is removed
// }, [var1, var2])
// empty dependencies means code will only run at page load
// no array dependencies means run at every component rerender

// useEffect runs after state updates

// ================================================================================================

// Portal code to render in different spot in html
// import ReactDOM from 'react-dom';
// ReactDOM.createPortal(<Button />, document.getElementById('portalLocationInHTML'))
// code to port, then location to render within

// ================================================================================================

// fragments
// <React.Fragment><React.Fragment />
// Same as <></>

// ================================================================================================

// refs
// const itemRefName = useRef();
// on component --------- ref={itemRefName};
// itemRefName.current.value ------------ access input value

// ================================================================================================

// useReducer

// ================================================================================================

// React.createContext
// useContext();
// wrapping with <Context.Provider>
// dedicated context file
// for site wide infrequent changes
// still use props for single link chains of passing info

// ================================================================================================

// import { useImperativeHandle } from 'react';

// const input = React.forwardRef((props, ref)) => {
// const inputRef = useRef();

// const activate = () => {
//     inputRef.current.focus();
// }

// expose function below
// useImperativeHandle(ref, () => {
// return {
//  focus: activate
// }
// })

// then logic, then return component

// for custom components

// ================================================================================================

// React.memo();
// export default React.memo(exampleComponent);
// avoid reevaluation unless props have changed
// cost of comparing props values vs cost of rerendering component and children

// ================================================================================================

// JS compares primitive values as equal, not arrays or objects because they are different places in memory

// ================================================================================================

// useCallback(() => {function}, [arrayOfDependencies, , ,])

// ================================================================================================

// state updates are scheduled, not immediately executed
// state updates from within same function are executed as one batch of state update
// useEffect ensures updated versions of values

// ================================================================================================

// class-based components
// cannot use hooks

// import {Component} from 'react';
// class className extends Component {
//     constructor () {
//         super();
//         this.state = {
//             state1 = true,
//             state2 = false
//         }
//     }
//      render(
//     this.setState((curState) => {
//         state1: !curState.state1;)
// }

// componentDidMount() ------------ useEffect(...,[])
// componentDidUpdate(prevProps, prevState) ------------ useEffect(...,[someValue])
// componentDidUnmount() ------------ useEffect(() => { return () => {...}},[])

// create / provide context the same way
// <component.consumer/>
// static contextType = NameOfContext; (can only set 1 context)
