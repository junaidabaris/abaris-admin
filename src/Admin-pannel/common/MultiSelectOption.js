import { useEffect, useState } from "react"
import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";
let count = 0
export const MultiselectOption = ({ allAttributes, children, data, showCheckbox, getSelectedOptions }) => {
    const params = useParams()
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleRemove = (option) => {
        setSelectedOptions([...option])
    }
    useEffect(() => {
        getSelectedOptions(selectedOptions)
    }, [selectedOptions])

    useEffect(() => {
        count++
        if (count === 3) {
            if (params) {
                if (allAttributes) {
                    const filterd = allAttributes?.map((item) => {
                        return { ...item, name: item.title }
                    })
                    getSelectedOptions(filterd);
                }
            }
        } else {
            return
        }

    }, [allAttributes])

    if (!params) {
        return (
            <>
                {children && children}
                <Multiselect
                    isObject={true}
                    displayValue="name"
                    options={data}
                    showCheckbox={showCheckbox}
                    selectedValues={[]}
                    onRemove={(option) => {
                        handleRemove(option)
                    }}
                    onSelect={(option) => {
                        let clonedOptions = [...option]
                        setSelectedOptions(clonedOptions)
                    }}
                />
            </>
        )
    } else {
        return (
            <>
                {children && children}
                <Multiselect
                    isObject={true}
                    displayValue="name"
                    options={data}
                    showCheckbox={showCheckbox}
                    selectedValues={allAttributes}
                    onRemove={(option) => {
                        handleRemove(option)
                    }}
                    onSelect={(option) => {
                        let clonedOptions = [...option]
                        setSelectedOptions(clonedOptions)
                    }}
                />
            </>
        )
    }
}