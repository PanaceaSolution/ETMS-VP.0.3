import { API } from "@/lib/api/userAPI";
import { queryOptions} from "@tanstack/react-query";


export function AllEventsOptions(){
    return queryOptions({
        queryKey:['events','all'],
        queryFn: getAllEvents,
        staleTime:60000,
    })
}

const getAllEvents = async()=>{
    return await API.get('/event/2')
}

export default {AllEventsOptions}