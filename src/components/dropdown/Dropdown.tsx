import { useState, useRef, useEffect } from 'react'
import useJsonFile from "@hooks/useJsonFile"
import districtsData from '../../_data/distritcs.json'

import downIcon from '@icons/down.svg'

import './dropdown.css'
import { Department } from '@declarations/Department'

const Dropdown = () => {
    const data: Department[] = useJsonFile(districtsData)
    const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false)
    const [isDistrictOpen, setIsDistrictOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const departmentRef = useRef(null)

    const handleDepartmentChange = (e: React.FormEvent, department: Department) => {
        setSelectedDepartment(department)
        setIsDepartmentOpen(false)

        const input = e.target as HTMLInputElement

        if(departmentRef.current) departmentRef.current.textContent = input.textContent
    }

    const toggleDepartmentDropdown = () => {
        setIsDepartmentOpen(prev => !prev)
        setIsDistrictOpen(false)
    }

    const toggleDistrictDropdown = () => {
        setIsDistrictOpen(prev => !prev)
    }


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDepartmentOpen(false)
                setIsDistrictOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div id="dropdown" ref={dropdownRef}>
            <div className="value" onClick={toggleDepartmentDropdown}>
                <div className="content">
                    <p ref={ departmentRef }>Departamento</p>
                    <img src={ downIcon } width={14} alt="down icon" />
                </div>
                {isDepartmentOpen && (
                    <div className="list" styled-scroll="true">
                        {data.map(department => (
                            <div key={department.id} onClick={(e) => handleDepartmentChange(e, department)}>
                                {department.department}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="value" onClick={toggleDistrictDropdown}>
                <div className="content">
                    <p>Selecciona un departamento</p>
                    <img src={ downIcon } width={14} alt="down icon" />
                </div>
                {(isDistrictOpen && selectedDepartment) && (
                    <div className="list" styled-scroll="true">
                        {selectedDepartment && selectedDepartment.districts.map(district => (
                            <div key={district.id}>{district.name}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown
