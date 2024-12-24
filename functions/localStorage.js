
function save_in_local_storage(data, key = 'data') {
    if (typeof window !== 'undefined' && localStorage) {      
            localStorage.setItem(key, JSON.stringify(data));
    }
}


function get_data_from_local_storage(key = 'data') {
    if (typeof window !== "undefined" && window.localStorage) {
        const data = localStorage.getItem(key);
        if (data) {
            try {
                return JSON.parse(data); // Versuche, die Daten zu parsen
            } catch (error) {
                console.error("Fehler beim Parsen der Daten aus localStorage:", error);
                return null; // Falls ein Fehler auftritt, gebe null zurück
            }
        }
    }
    return null; // Falls keine Daten vorhanden sind oder localStorage nicht verfügbar ist
}





export { save_in_local_storage, get_data_from_local_storage }