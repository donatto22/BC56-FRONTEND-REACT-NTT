export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^@context/(.*)$': '<rootDir>/src/context/$1',
        '^@declarations/(.*)$': '<rootDir>/src/declarations/$1',
        '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
        '^@icons/(.*)$': '<rootDir>/src/assets/icons/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '\\.(css|less|svg)$': 'identity-obj-proxy'
    },
    transform: {
        "^.+.tsx?$": ['ts-jest', {}],
        ".+\\.(png|jpg|jpeg|svg|webp)$": "jest-transform-stub"
    }
}
