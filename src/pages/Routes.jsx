import EditPizza from "./EditPizza"
import Pizza from "./Pizza"

export default [
  { path: "/pizza", name: "Pizzas", Component: <Pizza /> },
  { path: "/pizza/:pizzaId", name: "Edit Pizza", Component: <EditPizza /> }
]