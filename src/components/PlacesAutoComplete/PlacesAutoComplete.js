import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import '@reach/combobox/styles.css';

export default function PlacesAutocomplete() {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();
    
    const handleInput = (e) => {
        setValue(e.target.value);
    };
    
    const handleSelect = (val) => {
        setValue(val, false);
        console.log(val);
        clearSuggestions();
    };
    
    return (
        <div className="places-auto">
            <Combobox onSelect={handleSelect} aria-labelledby="demo">
                <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder="Enter an address" />
                    <ComboboxPopover>
                        <ComboboxList>
                        {status === "OK" &&
                            data.map(({ description }) => (
                            <ComboboxOption key={description} value={description} />
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
            </Combobox>
        </div>
    );
};