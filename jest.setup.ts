import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'
import React from 'react'

global.React = React

fetchMock.enableMocks()