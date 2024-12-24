import { Task } from "../small";

const AreaCard = ({ area_data,setData }) => {
    const { tasks, area_name,area_status } = area_data

    return (
        <div className="tracking-[2.5px] w-full flex flex-col items-center bg-[linear-gradient(90deg,_rgba(255,130,0,1)_0%,_rgba(250,179,139,1)_47%,_rgba(255,130,0,1)_100%)] rounded">
            <h1 className={`bg-[#3e2800] w-full text-center uppercase p-5 text-[#ffc29f] ${area_status && 'bg-[#3e280085]'} `}>
                {area_name}
            </h1>
            {tasks.map((task,i) => (
                <Task 
                key={i} 
                task_data={task}
                setData={setData} 
                 />
            ))}
            <hr />
        </div>
    );
};

export default AreaCard;
