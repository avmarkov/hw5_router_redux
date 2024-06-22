import { Person } from "../../models/person";
import { useSelector } from "react-redux";
import PersonItem from "./Item";

interface Props {

}

const CurrentLister = (props: Props) => {
    // при помощи useSelector можем получить текущий стейт
    const orderedList = useSelector((gs: any) => gs.person.list);

    return <>
        {orderedList.map((x: Person) => {
            return <div className='container' style={{ display: 'inline' }}>
                <PersonItem item={x} display="inline" />
            </div>
        })}
    </>;
};

export default CurrentLister;
