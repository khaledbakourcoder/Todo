import { useRef } from "react";

const Task = ({ task_data, setData }) => {
    const { task_name, task_status, task_id } = task_data;



    const audioRef = useRef(null); // Referenz zum <audio>-Element

    const playSound = () => {
      audioRef.current.play(); // Spielt den Soundeffekt ab
    };
  

    function changeData() {
        setData(prevData => (
            prevData.map(area => {
                const updatedTasks = area.tasks.map(task =>
                    task.task_id === task_id  // Vergleich mit striktem Vergleich (===)
                        ? { ...task, task_status: !task_status }  // Status umkehren
                        : task
                );
    
                // Berechnung des neuen `area_status`, nachdem der Task-Status geändert wurde
                const newAreaStatus = updatedTasks.every(task => task.task_status);
    
                return {
                    ...area,
                    tasks: updatedTasks,
                    area_status: newAreaStatus, // Direkt das neue `area_status` setzen
                };
            })
        ));

        !task_status && playSound()
    }
    



    return (
        <div
            
            onClick={changeData}
            className={`w-full border border-solid border-[#3e2800] uppercase tracking-[1px] flex items-center p-[10px] gap-10 text-[#3e2800] 
            ${task_status ? "bg-[#d8a78c] line-through justify-center" : "justify-between"}`}
        >
            <p>{task_name}</p>
            <audio ref={audioRef} src="/check.mp3" />
            <span className={!task_status ? "w-[20px] h-[20px] bg-[#3e2800] rounded-[12px] min-w-[20px]" : 'hidden'}></span>
        </div>
    );
};

export default Task
