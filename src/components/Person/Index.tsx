import CurrentLister from "./Current";
import PersonLister from "./Lister";

const PersonMain = () => {
    return <>
        <div className='container'>
            <CurrentLister />
            <PersonLister />
        </div>
    </>;
}

export default PersonMain;
