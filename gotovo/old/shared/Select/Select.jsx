const Select = ({options}) => {
    const optionsElements = options.map(({value, text}) => <option value={value}>{text}</option>)
    return (
        <select>
            {optionsElements}
        </select>
    );
};

export default Select;