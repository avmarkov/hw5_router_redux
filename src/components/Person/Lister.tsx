import { Person } from "../../models/person";
import PersonItem from "./Item";

interface Props {

}

const list: Person[] = [
    {
        username: "1",
        nickname: 'Alex',
        color: 'red',
    },
    {
        username: "2",
        nickname: 'Sergey',
        color: 'yellow',
    },
    {
        username: "3",
        nickname: 'Petr',
        color: 'green',
    },
    {
        username: "4",
        nickname: 'Ivan',
        color: 'blue',
    },

    {
        username: "5",
        nickname: 'Semen',
        color: 'cyan',
    },
    {
        username: "6",
        nickname: 'Bane',
        color: 'purple',
    },
]

const PersonLister = (props: Props) => {
    const css = {
        padding: '10px',
    };
    return <div className='container' style={css}>
        {list.map(x => <PersonItem item={x} key={`oi_${x.nickname}`} />)}
    </div >;
};

export default PersonLister;
