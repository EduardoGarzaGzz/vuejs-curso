import { IJournalState } from '@/modules/daybook/store/journal/interfaces';


export const journalState = (): IJournalState => ( {
    isLoading: true,
    entries  : [
        {
            id     : new Date().getTime(),
            date   : new Date().toDateString(),
            text   : 'Danistas accelerare, tanquam barbatus scutum.',
            picture: null
        },
        {
            id     : new Date().getTime() + 1,
            date   : new Date().toDateString(),
            text   : 'Danistas accelerare, tanquam barbatus scutum.',
            picture: null
        },
        {
            id     : new Date().getTime() + 2,
            date   : new Date().toDateString(),
            text   : 'Danistas accelerare, tanquam barbatus scutum.',
            picture: null
        },
        {
            id     : new Date().getTime() + 3,
            date   : new Date().toDateString(),
            text   : 'Danistas accelerare, tanquam barbatus scutum.',
            picture: null
        }
    ]
} );
