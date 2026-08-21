import GraphDays from "./GraphDays";
import GraphMonths from "./GraphMonths";

function GridGraph(){
    
    return( <>
                <table>
                    <caption>Streak</caption>
                    <GraphMonths/>
                    <GraphDays/>
                </table>
            </>);
}

export default GridGraph