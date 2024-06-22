import { useDispatch } from "react-redux";
import { Person } from "../../models/person";
import { PersonActions } from "../../stateManagment/personReducer";


interface Props {
    display?: string,
    item: Person;
}
const PersonItem = (props: Props) => {

    const { item, display } = props;
    const css = {
        display: display || `block`,
        padding: `10px`,
        margin: `10px`,
        width: `200px`,
        border: `2px solid ${item.color}`,
    };

    const dispatch = useDispatch();



    const onClick = (e: any) => {
        // при помощи dispatch сигнализируем redux
        // что нужно расчитать state
        dispatch({
            type: PersonActions.personCheck,
            payload: item,
        });
    };

    return <div className="container" style={css}>
        <input className="form-check-input" type={'checkbox'} onChange={onClick} />
        <span>{item.nickname}</span>
    </div>;
};
export default PersonItem;
