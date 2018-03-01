import React, {Component} from 'react';

class InputTextField extends Component {
  render() {
    const {
      fieldName,
      onChange,
      placeholder,
      type,
      value,
    } = this.props;

    return (
      <div>
        <label htmlFor={fieldName.toLowerCase()}>{fieldName}</label>
        <input
          type={type || 'text'}
          id={fieldName.toLowerCase()}
          placeholder={placeholder || ''}
          value={value}
          onChange={(event) => onChange(fieldName.toLowerCase(), event.target.value)}
        />
      </div>
    );
  }
}

export {InputTextField};
