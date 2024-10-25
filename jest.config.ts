export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@context/(.*)$': '<rootDir>/src/context/$1',
        '^@declarations/(.*)$': '<rootDir>/src/declarations/$1',
        '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '\\.(svg)$': 'jest-transform-stub',
        '\\.(jpg|jpeg|png|gif)$': 'jest-static-stubs/$1',
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    transform: {
        "^.+.tsx?$": ['ts-jest', {}],
        ".+\\.(png|jpg)$": "jest-transform-stub"
    }
}
