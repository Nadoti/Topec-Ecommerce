import { Lista } from "./styles";


export function HeaderContentNav() {
  console.log(window.screen.width)
  return (
    <Lista>
      <li className="active">Apple</li>
      <li >Samsung</li>
      <li>Dell</li>
      <li>Playstation</li>
      <li>Xbox</li>
      <li>Razer</li>
    </Lista>
  )
}