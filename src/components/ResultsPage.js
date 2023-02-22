
// import { useState, useEffect } from "react";



// function ActionButton({ action = "rock", onActionSelected }) {
//   return (
//     <button className="round-btn" onClick={() => onActionSelected(action)}>
//       <ActionIcon action={action} size={20} />
//     </button>
//   );
// }

// function ShowWinner({ winner = 0 }) {
//   const text = {
//     "-1": "You Win!",
//     0: "It's a Tie",
//     1: "You Lose!",
//   };

//   return <h2>{text[winner]}</h2>;
// }
// const actions = {
//   rock: ["scissors", "lizard"],
//   paper: ["rock", "spock"],
//   scissors: ["paper", "lizard"],
// };

// function calculateWinner(action1, action2) {
//   if (action1 === action2) {
//     return 0;
//   } else if (actions[action1].includes(action2)) {
//     return -1;
//   } else if (actions[action2].includes(action1)) {
//     return 1;
//   }

//   return null;
// }

// export function ResultsPage() {
//   const history = useHistory();
//   const { action } = useParams();

//   const [computerAction, setComputerAction] = useState("");
//   const [winner, setWinner] = useState(0);

//   useEffect(() => {
//     if (action !== "") {
//       const newComputerAction = randomAction();
//       setComputerAction(newComputerAction);

//       const newWinner = calculateWinner(action, newComputerAction);
//       setWinner(newWinner);
//     } else {
//       history.push("/");
//     }
//   }, [action]);

//   return (
//     <div className="center">
//       <h1>Results</h1>
//       <div>
//         <div>
//           <ActionIcon action={action} size={60} />
//           <ShowWinner winner={winner} />
//           <ActionIcon action={computerAction} size={60} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResultsPage;
