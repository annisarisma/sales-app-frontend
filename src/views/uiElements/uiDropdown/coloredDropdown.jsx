import React from 'react'

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from '@custom/Dropdown/Dropdown'
import { Link } from 'react-router-dom'

const ColoredDropdown = ({ data }) => {
  return (
    <React.Fragment>
      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-primary btn"
          arrow={true}>
          Primary Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link
              to="#"
              className={`dropdown-item ${item.textColor}`}
              key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-green btn"
          arrow={true}>
          Green Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link
              to="#"
              className={`dropdown-item dropdown-green`}
              key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown position="" trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-purple btn"
          arrow={true}>
          Purple Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link
              to="#"
              className={`dropdown-item dropdown-purple`}
              key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-yellow btn"
          arrow={true}>
          Yellow Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link
              to="#"
              className={`dropdown-item dropdown-yellow`}
              key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-sky btn"
          arrow={true}>
          Sky Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link to="#" className={`dropdown-item dropdown-sky`} key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Dropdown trigger="click" dropdownClassName="dropdown">
        <DropdownButton
          colorClass="flex items-center gap-2 btn-red btn"
          arrow={true}>
          Red Option
        </DropdownButton>
        <DropdownMenu>
          {data.map((item) => (
            <Link to="#" className={`dropdown-item dropdown-red`} key={item.id}>
              {item.text}
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}
export default ColoredDropdown
