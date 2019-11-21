import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import _ from 'lodash'

import reducers from '../reducers'

const inicialRecords = [
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-11-08T18:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
            {
                id: '3',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 3',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-01-03T15:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-05-07T15:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-05-10T16:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
            {
                id: '3',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 3',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },

    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-11-03T15:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-11-03T15:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
            {
                id: '3',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 3',
            },
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
            {
                id: '3',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 3',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
    {
        _id: Math.floor(Math.random() * 1000000),
        ownerId: Math.floor(Math.random() * 1000000),
        date: '2019-11-03T15:51:39.076+00:00',
        category: [
            {
                id: '1',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest',
            },
            {
                id: '2',
                userId: '5dc18923e4213dse930de6986',
                title: 'MedicalTest 2',
            },
        ],
        favorite: false,
        file: {
            url: 'https://{{server}}/file.pdf',
            name: 'NewFile.pdf',
        },
    },
]

const childrensData = [
    {
        _id: '5dc9a95304f7da25e4eba0d1',
        parent: '5dc587450fd7ae1cf8e9053d',
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'Female',
        birthDate: '2011-08-11T15:51:39.076+00:00',
        state: 'state',
        __v: 0,
        medicalRecords: [
            {
                _id: Math.floor(Math.random() * 1000000),
                ownerId: Math.floor(Math.random() * 1000000),
                date: '2019-11-10T18:51:39.076+00:00',
                category: [
                    {
                        id: '3',
                        userId: '5dc18923e4213dse930de6986',
                        title: 'BloodType - Jane Doe',
                    },
                ],
                favorite: false,
                file: {
                    url: 'https://{{server}}/file.pdf',
                    name: 'File-Jane-Doe.pdf',
                },
            },
            {
                _id: Math.floor(Math.random() * 1000000),
                ownerId: Math.floor(Math.random() * 1000000),
                date: '2019-11-10T18:51:39.076+00:00',
                category: [
                    {
                        id: '4',
                        userId: '5dc18923e4213dse930de6986',
                        title: 'Alergies - Jane Doe',
                    },
                ],
                favorite: false,
                file: {
                    url: 'https://{{server}}/file.pdf',
                    name: 'File-Jane-Doe.pdf',
                },
            },
            {
                _id: Math.floor(Math.random() * 1000000),
                ownerId: Math.floor(Math.random() * 1000000),
                date: '2019-11-10T18:51:39.076+00:00',
                category: [
                    {
                        id: '5',
                        userId: '5dc18923e4213dse930de6986',
                        title: 'Medical record - Jane Doe',
                    },
                ],
                favorite: false,
                file: {
                    url: 'https://{{server}}/file.pdf',
                    name: 'File-Jane-Doe.pdf',
                },
            },
        ],
    },
    {
        _id: '5dc9a86b04f7da25e4eba0d0',
        parent: '5dc587450fd7ae1cf8e9053d',
        firstName: 'Robert',
        lastName: 'Doe',
        gender: 'Male',
        birthDate: '2016-05-07T15:51:39.076+00:00',
        state: 'state',
        __v: 0,
        medicalRecords: [
            {
                _id: Math.floor(Math.random() * 1000000),
                ownerId: Math.floor(Math.random() * 1000000),
                date: '2019-11-11T18:51:39.076+00:00',
                category: [
                    {
                        id: '1',
                        userId: '5dc18923e4213dse930de6986',
                        title: 'BloodType - Robert Doe',
                    },
                ],
                favorite: false,
                file: {
                    url: 'https://{{server}}/file.pdf',
                    name: 'File-Robert-Doe.pdf',
                },
            },
            {
                _id: Math.floor(Math.random() * 1000000),
                ownerId: Math.floor(Math.random() * 1000000),
                date: '2019-11-11T18:51:39.076+00:00',
                category: [
                    {
                        id: '2',
                        userId: '5dc18923e4213dse930de6986',
                        title: 'Alergies - Robert Doe',
                    },
                ],
                favorite: false,
                file: {
                    url: 'https://{{server}}/file.pdf',
                    name: 'File-Robert-Doe.pdf',
                },
            },
        ],
    },
]

const INITIAL_STATE = {
    session: {
        success: true,
        token:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzU4NzQ1MGZkN2FlMWNmOGU5MDUzZCIsImVtYWlsIjoiYWx2YXJvMkBnbWFpbC5jb20iLCJpYXQiOjE1NzMyMjc2MzgsImV4cCI6MTYwNDc4NDU2NH0.KJTwY6bRdXzdoj6IrhSy51f0iEuuP9KPHxRE3Ealrts',
        user: {
            _id: '5dc587450fd7ae1cf8e9053d',
            email: 'alvaro2@gmail.com',
        },
    },
    medicalRecords: _.orderBy(inicialRecords, ['date'], ['desc']),
    currentRecord: [],
    currentChildrenRecord: [],
    currentChildren: [],
    childrens: childrensData.map(item => {
        return { ...item, currentRecord: [] }
    }),
    currentRole: { role: 'user', _id: '' },
    isLoading: false,
    error: null,
    success: null,
}

export const store = createStore(
    reducers,
    INITIAL_STATE,
    applyMiddleware(reduxThunk)
)
