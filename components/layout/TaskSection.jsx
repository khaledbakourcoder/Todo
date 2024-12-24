"use client";

// Components
import { AreaCard } from "@/components/large";
// Data
import area_tasks from "@/data/area_tasks";
// Functions
import { get_data_from_local_storage, save_in_local_storage } from "@/functions/localStorage";
// Hooks
import { useEffect, useState } from "react";

const TakeSection = () => {
    const [data, setData] = useState(null);

    // useEffect, um die initialen Daten entweder aus localStorage oder aus area_tasks zu laden
    useEffect(() => {
        const storedData = get_data_from_local_storage();
        if (!storedData) {
            save_in_local_storage(area_tasks);
            setData(area_tasks);  // Setze die initialen Daten, falls nichts im localStorage ist
        } else {
            setData(storedData);  // Lade die Daten aus dem localStorage
        }
    }, []); // Dieser Effekt läuft nur einmal beim ersten Rendern

    // useEffect, um die Daten im localStorage zu aktualisieren, wenn sich 'data' ändert
    useEffect(() => {
        if (data !== null) {
            save_in_local_storage(data);
              // Speichere die geänderten Daten im localStorage
        }
    }, [data]); // Der Effekt wird immer ausgelöst, wenn 'data' sich ändert

    // Falls die Daten noch nicht geladen sind, zeige einen Ladezustand an
    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <section className="px-5 flex flex-wrap justify-between items-center gap-10">
            {Array.isArray(data) &&
                data.map((area_data, i) => (
                    <AreaCard
                        key={i}
                        area_data={area_data}
                        setData={setData}  // Passiere setData an AreaCard
                    />
                ))}
        </section>
    );
};

export default TakeSection;
