import {sortedUniq, uniqueId} from "lodash"
import { useNavigate } from "react-router-dom"

export function sorted(data){
   return sortedUniq(data.map(el=> el.category))

}


