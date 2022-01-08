import { IJournalState } from '@/modules/daybook/store/journal/interfaces';


export const journalState = (): IJournalState => ( {
    isLoading: true,
    entries: []
} );
