import React, { useContext } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import '@reach/combobox/styles.css';
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';

export default function PlacesAutocomplete() {
    const context = useContext(SoundlyInvestContext);
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
        context.setAddress(val);
        console.log(val);
        clearSuggestions();
    };
    
    return (
        <div className="places-auto">
            <Combobox onSelect={handleSelect} aria-labelledby="demo">
                <ComboboxInput value={value} onChange={handleInput} disabled={!ready} placeholder={context.propAddress ? context.propAddress : "Enter the property's address."} />
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