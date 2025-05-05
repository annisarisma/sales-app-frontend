import React from 'react'

import { NumericFormat } from 'react-number-format'

// Custom input for money formatting
const MoneyInput = ({ value, format, onChange }) => {
  return (
    <NumericFormat
      value={value}
      thousandSeparator={format.thousandSeparator}
      decimalSeparator={format.decimalSeparator}
      decimalScale={format.decimalScale}
      fixedDecimalScale={true}
      onValueChange={(values) => onChange(values.formattedValue)}
      className="form-input"
      placeholder={format.placeholder}
    />
  )
}

const MoneyInputs = () => {
  const [value1, setValue1] = React.useState('99999')
  const [value2, setValue2] = React.useState('12000.69')
  const [value3, setValue3] = React.useState('99999.69')
  const [value4, setValue4] = React.useState('12000.6911')

  return (
    <React.Fragment>
      <div className="col-span-12 card">
        <div className="card-header">
          <h6 className="card-title">Money Inputs</h6>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-space">
            <div>
              <label htmlFor="moneyInput1" className="form-label">
                Here is a fully functioning money input mask:
              </label>
              <MoneyInput
                value={value1}
                format={{
                  thousandSeparator: ',',
                  decimalSeparator: '.',
                  decimalScale: 0,
                  placeholder: '0',
                }}
                onChange={setValue1}
              />
            </div>
            <div>
              <label htmlFor="moneyInput2" className="form-label">
                If you wish to swap the periods for commas and vice versa (as is
                required in certain currencies), you can do so using the second
                optional parameter:
              </label>
              <MoneyInput
                value={value2}
                format={{
                  thousandSeparator: '.',
                  decimalSeparator: ',',
                  decimalScale: 2,
                  placeholder: '0.0000.00',
                }}
                onChange={setValue2}
              />
            </div>
            <div>
              <label htmlFor="moneyInput3" className="form-label">
                You may also choose to override the thousands separator by
                supplying a third optional argument:
              </label>
              <MoneyInput
                value={value3}
                format={{
                  thousandSeparator: ' ',
                  decimalSeparator: '.',
                  decimalScale: 2,
                  placeholder: '0.00',
                }}
                onChange={setValue3}
              />
            </div>
            <div>
              <label htmlFor="moneyInput4" className="form-label">
                You can also override the default precision of 2 digits by using
                any desired number of digits as the fourth optional argument:
              </label>
              <MoneyInput
                value={value4}
                format={{
                  thousandSeparator: ',',
                  decimalSeparator: '.',
                  decimalScale: 4,
                  placeholder: '00,000.0000',
                }}
                onChange={setValue4}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MoneyInputs
