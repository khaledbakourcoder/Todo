/**
 * 
 * @param   {Array} AreaData all data for ares => tasks
 * @param   {number} id  the area id to get the area 
 * @returns  {object} area data with the same id  
 */
function get_Area_by_id(areaData, area_id) {
    return areaData.find(area => area.area_id === area_id);
}


function get_Task_by_id(areaData, area_id, task_id,) {

    if(areaData){
        const area =  get_Area_by_id(areaData, area_id)
        return area.tasks.find(task => task.task_id === task_id)

    }
    return 'error'
}





export { get_Area_by_id, get_Task_by_id }
